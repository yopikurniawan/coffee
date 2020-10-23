const { User, Coffee, Order } = require('../models')
const bcrypt = require('bcryptjs')

class SessionController {
   static landingPage(req, res) {
      res.render('home.ejs')
   }

   static private(req, res) {
      // res.render('private.ejs')
      Coffee.findAll()
      .then(data => {
         res.render('private.ejs', {data})
      })
      .catch(err => {
         res.send(err)
      })}

   static loginPage(req, res) {
      res.render('form-login.ejs')
   }

   static postLoginPage(req, res) {
      // res.send(req.body)
      let username = req.body.username
      let password = req.body.password

      User.findOne({
         where: {
            username: username
         }
      })
      .then((user) => {
        if (!user) {
           res.send('username atau katasandi salah')
        } else {
           let result = bcrypt.compareSync(password, user.password)

           if (result == true) {
              req.session.isLogin = true // berkaitan dengan middlewares
               res.redirect('private')
               // res.send(ohh)
            } else {
               res.send('username or password is wrong')
            }
        }
      }).catch((err) => {
         res.send(err)
      });
   }

   static logout(req, res) {
      req.session.destroy((err) => {
         if (err) {
            res.send(err)
         } else {
            res.redirect('/')
         }
      })
   }

   static register(req, res) {
      res.render('register')
   }

   static postRegister(req, res) {
      let newUser = {
         username: req.body.username,
         password: req.body.password
      }

      User.create(newUser)
      .then(data => {
         req.session.isLogin = true
         res.redirect('/private')
         res.send(data)
      })
      .catch(err => {
         res.send(err)
      })
   }

   static privateCheckout(req, res) {
      Coffee.findAll()
      .then(data => {
         res.render('add-order', {data})
      })
      .catch(err => {
         res.send(err)
      })
   }

   static postprivateCheckout(req, res) {
      // res.send(req.body)
      let obj = {
         "CoffeeId": req.body.name,
         "count_order": req.body.count_order,
      }

      Order.create(obj)
      .then((data) => {
       res.render('saythanks')  
      }).catch((err) => {
         res.send(err)
      });
   }
}

module.exports = SessionController
const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate.js')

// const CustomerRouter = require('./customer-router.js')
// const MenuRouter = require('./home-page-router.js')
// const HomePageRouter = require('./home-page-router')
// const RegisterRouter = require('./register-controller.js')
// const LoginRouter = require('../controllers/login-controller.js')
const SessionController = require('../controllers/session-controller.js')

router.get('/', SessionController.landingPage)
router.get('/private', authenticate, SessionController.private)
router.get('/private/checkout', authenticate, SessionController.privateCheckout)
router.post('/private/checkout', authenticate, SessionController.postprivateCheckout)


// router.use('/', HomePageRouter)
// router.use('/customers', CustomerRouter)
// router.use('/menu', MenuRouter)
// router.use('/register', RegisterRouter)
router.get('/login', SessionController.loginPage)
router.post('/login', SessionController.postLoginPage)
router.get('/logout', SessionController.logout)
router.get('/register', SessionController.register)
router.post('/register', SessionController.postRegister)
// router.get('/login', (req, res) => {
//    res.send('Halo Login')
// })

module.exports = router
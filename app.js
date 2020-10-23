const express = require('express')
const port = process.env.port || 3000
const app = express()
const router = require('./routes')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


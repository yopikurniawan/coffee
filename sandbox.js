// Testing for Hash
const { User } = require('./models')

User.create({
   username: "oke",
   password: "oke"
})
.then(data => {
   console.log(data)
})
.catch(err => {
   console.log(err)
})
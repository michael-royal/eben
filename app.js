const dotenv = require('dotenv')
const express = require('express')
const app = express()
const mysql = require('mysql2')
const indexRouter = require('./routes/gets/index')
const bodyParser = require('body-parser')
const endcoder = bodyParser.urlencoded({extended: false})
dotenv.config()
// console.log(process.env.PORT)
const db = mysql.createConnection({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
})

db.connect((error,result) =>{
  if (error) {
    console.log(error)
  }else{
    console.log('Database Connected Successfullly')
  }})

  app.set('view-engines', 'ejs')

app.use('/', indexRouter)


app.post('/registered',endcoder, function(req, res, next) {
      const {name,phone,email,password,confirm} = req.body
      console.log(phone,email)

      let sql = 'SELECT * FROM users WHERE email =? OR phone = ?'

      db.query(sql,[email,phone], (error, result) =>{
        if(result.length > 0){
          return res.render('signin.ejs', {title: 'Sign up', message:'The email or phone number is already in use'})
        }else if(password != confirm){
          return res.render('signin.ejs', {title: 'Sign up', message:'Check the password and try again'})
        }
          
        let sql = 'INSERT INTO users SET ?'
        db.query(sql, {name,email,phone,password},(error, result) =>{
          if (error){
            throw error
          }else{
            res.render('registered.ejs', {title: 'registered', name: name})
          }
        })
      })

   })
  


app.post('/loggedin',endcoder, function(req, res, next) {
  // console.log(req.body)
  console.log(req.body)
const email = req.body.email
const password = req.body.password
  console.log(email,password)

  let sql = 'SELECT * FROM users WHERE email = ? AND password =? '
  db.query(sql,[email, password], (error, result) =>{
  
    if (error) {
      throw error
    }
    if (result.length > 0) {
      const ret = result[0]
    res.render('loggedin.ejs', {title: 'Features'})
    }
});
})
app.get('/loggedin', (req,res) =>{
  res.render('loggedin.ejs', {title: 'Features'})
})







app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use( express.static('public'))




app.listen(process.env.PORT)


module.exports = app;
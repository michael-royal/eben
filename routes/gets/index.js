var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Home' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin.ejs', { title: 'Sign Up',message:'' });
});

router.get('/about', function(req, res, next) {
  res.render('about.ejs', { title: 'About' });
});

router.get('/speech', function(req, res, next) {
  res.render('speech.ejs', { title: 'Speech-Recognition' });
});

router.get('/text', function(req, res, next) {
  res.render('text.ejs', { title: 'Text-to-Speech' });
});

router.get('/users', function(req, res, next) {
  res.render('users', {title: 'Users'})
});

router.get('/login', function(req, res, next) {
  res.render('login.ejs', { title: 'Log In' });
});

module.exports = router;

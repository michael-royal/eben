var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/registered', function(req, res, next) {
  res.render('registered.ejs', { title: 'Registered' });
});

module.exports = router;

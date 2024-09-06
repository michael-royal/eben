var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/loggedin', function(req, res, next) {
  res.render('loggedin', { title: 'Features' });
});

module.exports = router;

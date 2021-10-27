var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API BACKEND', en: process.env.URI_DB });
});

module.exports = router;

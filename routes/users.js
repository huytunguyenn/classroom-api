var express = require('express');
var router = express.Router();

const classesService = require('../components/classes/classesService')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const classes = await classesService.list()
  res.send(classes);
});

module.exports = router;

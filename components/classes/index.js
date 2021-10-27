const express = require('express');
const router = express.Router();

const classesController = require('./classesController')

/* GET users listing. */
router.get('/', classesController.list);

router.post('/', classesController.add);

module.exports = router;


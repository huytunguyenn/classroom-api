const express = require('express');
const router = express.Router();

const dummy = require('./dummy')

const classesController = require('./classesController')

/* GET users listing. */
router.get('/', classesController.list);

router.get('/:id', classesController.detail);

router.post('/', classesController.add);

module.exports = router;


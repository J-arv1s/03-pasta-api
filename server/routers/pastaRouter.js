
const express = require('express')
const router = express.Router()

const  pastaController = require('../controllers/pastaController')

router.get('/', pastaController.index)
router.get('/:id', pastaController.show)

module.exports = router
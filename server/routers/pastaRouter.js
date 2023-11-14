
const express = require('express')
const router = express.Router()

const  pastaController = require('../controllers/pastaController')

router.get('/', pastaController.index)
router.get('/:id', pastaController.show)
router.post('/', pastaController.create)

module.exports = router

const express = require('express')
const router = express.Router()

const  pastaController = require('../controllers/pastaController')

router.get('/', pastaController.index)
router.get('/:id', pastaController.show)
router.post('/', pastaController.create)
router.patch('/:id', pastaController.update)

module.exports = router
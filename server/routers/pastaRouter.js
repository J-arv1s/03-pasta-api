
const express = require('express')
const router = express.Router()

const  pastaController = require('../controller/pastaController')

router.get('/', pastaController.index)

module.exports = router
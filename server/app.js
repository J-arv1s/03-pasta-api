
const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const pastaRoutes = require('./routers/pastaRouter')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

module.exports = app
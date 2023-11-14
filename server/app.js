
const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const pastaRoutes = require('./routers/pastaRouter')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/pasta', pastaRoutes)

app.get('/', (req, res) => {
    res.send({
        message: "Hello and welcome",
        description: "PASTA API",
        endpoints: [
            "GET    /",
            "GET    /pasta",
            "GET    /pasta/:id",
            "POST   /pasta",
            "PATCH  /pasta/:id",
            "DELETE /pasta/:id"
        ]
    })
})

module.exports = app
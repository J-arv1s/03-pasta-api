
const Pasta = require('../model/Pasta')

const index = (req, res) => {
    const pasta = Pasta.getAll()
    res.status(200).send(pasta)
}

const show = (req, res) => {
    try {
        const pastaID = parseInt(req.params.id)
        const pasta = Pasta.findByID(pastaID)
        res.status(200).send(pasta)
    } catch (error) {
        res.status(404).send('No pasta found here')
    }
}

const create = (req, res) => {
    try {
        const data = req.body
        const newPasta = Pasta.create(data)
        res.status(201).send(newPasta)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

module.exports = {
    index, show, create
}
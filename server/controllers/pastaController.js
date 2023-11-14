
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

module.exports = {
    index, show
}
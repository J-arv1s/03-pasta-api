
const Pasta = require('../model/Pasta')

const index = (req, res) => {
    const pasta = Pasta.getAll()
    res.status(200).send(pasta)
}

module.exports = {
    index
}
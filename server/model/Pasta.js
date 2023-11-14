
const pastasData = require('../data/data.json')

class Pasta{
    constructor(data){
        this.id = data.id
        this.type = data.type
    }

    static getAll(){
        const pasta = pastasData.map(p => new Pasta(p))
        return pasta
    }

    static findByID(pastaID){
        try {
            const pastaData = pastasData.find(p => p.id === pastaID)
            const pasta = new Pasta(pastaData)
            return pasta
        } catch (error) {
            throw new Error('This pasta does not exist')
        }
    }
}

module.exports = Pasta
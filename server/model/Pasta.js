
const pastaData = require('../data/data.json')

class Pasta{
    constructor(data){
        this.id = data.id
        this.type = data.type
    }

    static getAll(){
        const pasta = pastaData.map(p => new Pasta(p))
        return pasta
    }
}

module.exports = Pasta
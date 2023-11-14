
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

    static create(data){
        if(!data.type) throw new Error('pasta type missing')
        
        try {
            let nextID
            pastasData.length
                ? nextID = pastasData.reduce((p1, p2) => p1.id > p2.id ? p1 : p2).id + 1
                : nextID = 1

            const newPasta = new Pasta({ 
                id: nextID, 
                type: data.type
            })
            pastasData.push(newPasta)
            return newPasta
        } catch (error) {
            throw new Error(error)
        }
    }

    update(data){
        try {
            const pastaData = pastasData.find(pasta => pasta.id === this.id)

            if(!pastaData) throw new Error('No pasta found here')
            
            if(!data.type) throw new Error('pasta type missing')
            
            pastaData.type = data.type
            return new Pasta(pastaData)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = Pasta
const pet = require('../models/PetModel');

class PetController {
    static async createPET(req,res) {
        const newPet = req.body;
        console.log(newPet)
        try {
            await pet.create(newPet)
            res.status(200).json({
                message: 'Animal inserido com sucesso no banco.'
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = PetController;
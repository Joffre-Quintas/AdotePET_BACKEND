const user = require('../models/UserModel');

class UserController {
    static async createUser(req,res) {
        const newUser = req.body;
        const { cpf } = newUser;

        const userRegistred = await user.findOne({cpf: cpf})
        
        if (!userRegistred) {
            try {
                await user.create(newUser)
                res.status(200).json({
                    message: 'Usuário criado com sucesso!'
                })
            } catch (error) {
                console.log(error)  
            }
        } else {
            res.status(200).json({
                message: 'Usuário ja cadastrado!'
            })
        }
    }
}

module.exports = UserController;
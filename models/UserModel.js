const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    cpf: {type: String, required: true, unique: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    adress: {
        cep: Number,
        city: String,
        street: String,
        number: Number
    },
    password:{type: String, required: true}
    
})

const user = mongoose.model('user', UserSchema);
module.exports = user;
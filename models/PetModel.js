const mongoose = require('mongoose');
const { schema } = require('./UserModel');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const PetSchema = new mongoose.Schema({
    base64: {type: String, required: true},
    nra: {type: Number, unique: true},
    nameTemp: {type: String, required: true},
    skin: {type: String, required: true},
    health: {type: String, required: true},
    ageAprox: {type: Number, required: true},
    size: {type: String, required: true},
    race: {type: String, required: true}, 
    ong: {type: Object, required:true}
})

schema.plugin(AutoIncrement, {inc_field: 'nra'});

const pet = mongoose.model('pet', PetSchema);
module.exports = pet;
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: Number,
    nome: String,
    dataNascimento: String,
    cpf: String,
    email: String,
    senha: String,
    admin: Boolean,
});

module.exports = mongoose.model('User', UserSchema);
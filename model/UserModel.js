const mongoose = require('mongoose')
const crypto = require('crypto')

const user = new mongoose.Schema({
    nome: {
        type: String,

    },

    password: {
        type: String,
        required: true,
        select: false,
        set: (value) => crypto.createHash('md5').update(value).digest('hex')
    },

    tipo: {
        type: String,

    },

    permissoes: [{
        link: String,
        icon: String
    }],

    criado: {
        type: Date,
        default: Date.now
    }
})

const usuario = mongoose.model('Usuario', user)

module.exports = usuario
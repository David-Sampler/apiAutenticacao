const mongosse = require('mongoose')

const cliente = new mongosse.Schema({

    nome: {
        type: String,
        uppercase: true
    },

    contato: Array,

})

const cli = mongosse.model("Clientes", cliente)

module.exports = cli
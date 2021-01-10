const mongoose = require('mongoose')

const produtos = new mongoose.Schema({
    marca: String,
    categoria: String,
    genero: String,
    valor: Number,
    tamanhos: Number

})

const modelo = mongoose.model('Produtos', produtos)

module.exports = modelo
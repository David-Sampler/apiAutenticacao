const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Rotas = require('./router/routers')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://sampler:12345@cluster0.lqjhc.mongodb.net/calcados?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })


//rotas
Rotas(app)

app.use(function (req, res, next) {
    res.status(404).send('Rota não encontrada')
})

app.listen(3000, () => {
    console.log("Conectado com sucesso")
})
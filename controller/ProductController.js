const ProductModel = require('../model/ProductModel')

module.exports = {

    all: async (req, res) => {
        let filter = await ProductModel.find()
        res.json(filter)
    },

    insert: async (req, res) => {
        let dados = req.body
        console.log(dados)

        try {

            let produtos = await new ProductModel(dados)
            produtos.save()
            res.json(produtos)

        } catch (error) {
            console.log(error)
        }

        return res.json({ msg: "Dados Cadastrado com sucesso" })


    },

    del: async (req, res) => {
        let id = req.params.id
        let usuario = await ProductModel.findByIdAndRemove(id)

        if (usuario) {
            return res.json({ msg: "Produto excluido com sucesso" })
        } else {
            console.log("Usuario já foi excluido")
            return res.json("Não existe usuario a ser excluido")
        }
    },

    atualizar: async (req, res) => {
        let id = req.params.id
        let usuario = await ProductModel.findByIdAndUpdate(id, req.body)
        console.log(usuario)
    }



}
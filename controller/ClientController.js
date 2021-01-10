const cliente = require('../model/ClientModel')


module.exports = {

    all: async (req, res) => {
        const filter = await cliente.find()
        console.log(filter)
        return res.json(filter)

    },

    insert: async (req, res) => {
        let dados = req.body
        const filter = await cliente.findOne(dados)

        if (filter)
            return res.json("Usuário já existe")

        try {
            let insert = await new cliente(dados)
            insert.save()
            res.json({ msg: "Usuario cadastrado com sucesso" })
        } catch (error) {
            res.json("Algum erro no cadastro")
        }

    },

    del: async (req, res) => {

        const usuario = await cliente.findByIdAndDelete(req.params.id)

        if (usuario) {
            return res.json("Cliente excluido")
        } else {
            return res.json("Esse cliente não existe")
        }

    }

}
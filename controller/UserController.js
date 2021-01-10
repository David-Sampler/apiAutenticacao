
const Usuario = require('../model/UserModel')
const jwt = require('../setup/jwt')

module.exports = {


    allUsers: async (req, res) => {
        const [, token] = req.headers.authorization.split(' ')
        try {
            let payload = await jwt.verify(token)
            // @ts-ignore

            let usuarios = await Usuario.findById(payload.token)
            return res.json(usuarios)

        } catch (error) {
            console.log(error)
        }


    },

    insertUser: async (req, res) => {
        let dados = req.body

        try {
            const cadastro = await Usuario.create(dados)

            const { password, ...usuario } = cadastro.toObject()
            console.log(usuario._id)
            //criando token
            const token = jwt.sign({ user: usuario._id })
            return res.json({ usuario, token })

        } catch (error) {
            console.log(error)
        }
        res.json("Cadastrado com sucesso")

    },

    autenticar: async (req, res) => {
        // let [, hash] = req.headers.authorization.split(' ')
        // let [nome, password] = Buffer.from(hash, 'base64').toString().split(':')


        let password = req.body
        console.log(password)
        const usuario = await Usuario.findOne(password)
        console.log(usuario)

        try {
            if (usuario) {
                const token = await jwt.sign({ token: usuario._id })
                return res.json({ user: usuario, token: token })
            } else {
                res.json("Usuario não autorizado")
            }


        } catch (error) {
            console.log(error)
        }


    }
}


const produtos = require('../controller/ProductController')
const clientes = require('../controller/ClientController')
const usuario = require('../controller/UserController')
const jwt = require('../setup/jwt')

module.exports = (app) => {

    app.get('/allprodutos', produtos.all)
    app.post('/insertprodutos', produtos.insert)
    app.put('/deleteproduto/:id', produtos.del)

    app.get('/allcliente', clientes.all)
    app.post('/insertcliente', clientes.insert)
    app.put('/deletecliente/:id', clientes.del)

    app.get('/allusuarios', usuario.allUsers)
    app.post('/insertuser', usuario.insertUser)
    app.post('/login', usuario.autenticar)

}
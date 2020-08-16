const clientes = require('../models/clientes')
let clientesController = {
    listarClientes: (req, res) => {
        let clientesMostrar = clientes.listarUsuarios()
        res.send(clientesMostrar)
    }
}

module.exports = clientesController;
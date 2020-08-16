const cardapio = require('../models/cardapio');

let pizzasController = {
    listarPizzas: (req,res) => {
        let pizzaMostrar = cardapio.buscarPizza(req.params.id)
        res.send(pizzaMostrar)
    },
    mostrarPizza: (req,res) => {
        let mostrarCardapio = cardapio.listarCardapio()
        res.send(mostrarCardapio)
    }
}

module.exports = pizzasController;
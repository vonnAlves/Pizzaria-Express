const listaPizzas = require('../database/listaPizza.json');
const fs = require('fs');
const path = require ('path');



const PizzaController = {

    index: (req, res) => {
        res.render('index', {listaPizzas});
    },
    show: (req,res) => {
        let  {id} = req.params
        let pizza = listaPizzas.find(
            (pizza) => { return pizza.id == id }
        )
        res.render('pizza', { pizza });
    },
    create: (req,res) => {
        res.render('create-pizza');
    },
    store: (req,res) => {
        let {nome, preco, ingredientes} = req.body;
        //separa ingredientes por virgula
        ingredientes = ingredientes.split(',');
        //adicionar caminho img ao database
        let img = '/img/uploads/' + req.files[0].originalname;
        //lógica do id
        let id = listaPizzas.length + 1;

        listaPizzas.push({
            id:id, 
            nome:nome, 
            preco:preco, 
            img:img, 
            ingredientes:ingredientes
        })
        fs.writeFileSync(path.join('database','listaPizza.json'), JSON.stringify(listaPizzas));
        res.redirect('/')
    },
    edit: (req,res) => {
        let {id} = req.params;
        let pizza = listaPizzas.find((pizza)=> {
            return  pizza.id == id
        })
        res.render('edit-pizza', {pizza})
    },
    update: (req,res) => {
        let {id} = req.params;
        let pizza = listaPizzas.find((pizza)=> {
            return pizza.id ==id
        })

        let {nome, ingredientes, preco} = req.body;
        pizza.nome = nome;
        pizza.preco=preco;
        pizza.ingredientes = ingredientes.split(',');
        fs.writeFileSync(path.join('database', 'listaPizza.json'), JSON.stringify(listaPizzas));

        res.redirect('/');
    }
}

module.exports = PizzaController;
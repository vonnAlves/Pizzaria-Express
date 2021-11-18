const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const listaUsers = require('../database/listaUser.json');
const listaPizzas = require('../database/listaPizza.json');

const UserController = {
    index: (req, res) => {
        res.render('user-menu', {listaPizzas});
    },
    create: (req,res) => {
        res.render('create-user')
    },
    // Lógica para salvar usuario no database
    store:(req,res) => {
        let {nome, email, senha, conf} = req.body;
        let senhaHashing = bcrypt.hashSync(senha, 10)
        let check = bcrypt.compareSync(conf, senhaHashing);

        if(nome == ''){
            res.redirect('/user/cadastrar');
        }
        else if (senha =='') {
            res.redirect('/user/cadastrar')
        }
        else if(!check) {
            res.redirect('/user/cadastrar')
        }
        else {
            listaUsers.push({
                nome:nome,
                email:email,
                senha:senhaHashing
            });

            fs.writeFileSync(path.join('database','listaUser.json'), JSON.stringify(listaUsers));
            res.redirect('/user/login')       
        }
    },
    show: (req,res) => {
        res.render('login-user');
    },
    // Lógica para buscar usuario no database;
    login: (req,res) => {
        let {email, senha} = req.body;
    
        listaUsers.find((user) => {
            if(email != user.email) {
               res.redirect("/user/login");
           }
            else if (bcrypt.compareSync(senha, user.senha)) {
                req.session.user = user
                res.redirect("/user")
           }
            else {
                res.redirect('/user/login');
            }
        })
    },

}

module.exports = UserController
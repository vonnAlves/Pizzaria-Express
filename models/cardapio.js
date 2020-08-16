const cardapio = [
    {
        sabor: "Marquerita",
        preco: 35
    },
    {
        sabor:"portuquesa",
        preco: 40
    },
    {
        sabor:"Calabresa",
        preco:35
    }
];

//funções de acesso
const listarCardapio = () => cardapio;

const buscarPizza = (id) =>{
    let resultadoBusca = cardapio.filter( (pizza) => pizza.sabor === id);
    return resultadoBusca;
}

module.exports = {listarCardapio, buscarPizza}
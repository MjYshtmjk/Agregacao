import { Produto } from "./view/Produto";
import { CarrinhoDeCompra } from "./view/CarrinhoDeCompra";

const produto1 = new Produto(`Meia`, 12.50);
const produto2 = new Produto(`Camiseta`, 62.75);
const produto3 = new Produto(`Bermuda`, 50.48);
const produto4 = new Produto(`Calça`, 150.59);
const produto5 = new Produto(`Boné`, 35.99);

const carrinhoDeCompra = new CarrinhoDeCompra();
carrinhoDeCompra.inserirProdutos(produto1,produto2,produto3,produto4,produto5);
console.log(`Quantidade de itens no carrinho: ${carrinhoDeCompra.quantidadeProdutos()}`);
console.log(`Valor Total: ${carrinhoDeCompra.valorTotal()}`);
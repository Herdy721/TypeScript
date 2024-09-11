// Tipos Primitivos
let valor = 3000;
let nome = "nome";
let isPago = false;
let qualquer = "";
// Arrays
const list = [];
list.push("ramon", 22, true);
const lista = [];
lista.push(4, 22, 55);
// Enum
var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    tipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    tipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(tipoTransacao || (tipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0,
};

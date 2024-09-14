import { TipoTransacao } from "./tipoTransacao.js";
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            saldo += Number(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA ||
            novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= Number(novaTransacao.valor);
        }
        else {
            alert("Tipo de transação é inválido!");
            return;
        }
        console.log(novaTransacao);
    }
};
export default Conta;

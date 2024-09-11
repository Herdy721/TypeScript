var saldo = 3000;
var elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.valor.value) {
        alert('Informe o valor da transação!');
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao === 'Depósito') {
        saldo += Number(valor);
    }
    else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
        saldo -= Number(valor);
    }
    else {
        alert('Tipo de transação é inválido!');
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    var novaTransacao = {
        tipo: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});

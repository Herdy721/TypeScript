let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
alert("Testando compilação do TS   sds");
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.valor.value) {
        alert('Informe o valor da transação!');
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
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
    const novaTransacao = {
        tipo: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
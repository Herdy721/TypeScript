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
    if (tipoTransacao === TipoTransacao.DEPOSITO) {
        saldo += Number(valor);
    }
    else if (tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= Number(valor);
    }
    else {
        alert('Tipo de transação é inválido!');
        return;
    }
    elementoSaldo.textContent = formatarMoeda(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});

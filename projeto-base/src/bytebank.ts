let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
if (elementoSaldo!= null) {
    elementoSaldo.textContent = saldo.toString();
}


const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!elementoFormulario.valor.value) {
        alert('Informe o valor da transação!');
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data")as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao === 'Depósito') {
        saldo += Number(valor);
    } else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
        saldo -= Number(valor);
    } else {
        alert('Tipo de transação é inválido!');
        return;
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipo: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();

});



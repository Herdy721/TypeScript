// Tipos Primitivos
let valor: number = 3000;
let nome: string = "nome";
let isPago: boolean = false;
let qualquer: any = "";


// Arrays
const list = [];
list.push("ramon", 22, true)

const lista: number[] = [];
lista.push(4, 22, 55)

// Tipos Personalizados (Type Alias)

type Transacao = {
    tipoTransacao: tipoTransacao,
    data: Date,
    valor: number
}

// Enum
enum tipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}


const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0,
}
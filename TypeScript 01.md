# <img src="https://skillicons.dev/icons?i=ts" /> TypeScript na prática

Data: [[2024-05-03]]

O que é TypeScript?

TypeScript é uma linguagem de programação e também um superconjunto de [[JavaScript 01 | JavaScript]]
. Isso quer dizer que todo o código [[JavaScript 01 | JavaScript]] é perfeitamente aceito em um programa de TypeScript, adicionando uma série de recursos a mais, em especial relacionados a tipagem.


Qual é a diferença entre [[JavaScript 01 | JavaScript]] e TypeScript?

São duas linguagens de programação diferentes, porém uma é o superconjunto de outra. TypeScript é esse superconjunto, possibilitando que você use absolutamente tudo do [[JavaScript 01 | JavaScript]]
de forma válida. isto é, todo seu código JavaScript é válido em TypeScript (mas não o contrário). A principal diferença vai ser em relação a tipagem de dados, ao uso de classes, aos mecanismos de abstração, que são bem mais fortes.

![[Pasted image 20240503104750.png]]


---


O TS é como um correto do JS.
Para transformar um arquivo JS em TS, basta alterar o sufixo para .ts
após isso é necessário compilar o código com o comando tsc nome.ts
toda vez que altere o arquivo ts é necessário recompilar.

## Forma correta de definir o tipo de uma variável como numérica

let meuNumero: number = 0;
O TS utiliza a sintaxe de dois-pontos (:) para separar o nome da variável de seu tipo explícito.

```ts
   let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);
```

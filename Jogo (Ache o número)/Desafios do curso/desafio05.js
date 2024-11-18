// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = Giovanni
console.log(`Olá, ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" 
let nome1 = Giovanni
alert(`Olá, ${nome1}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemPreferida = prompt('Qual a linguagem de programção que você mais gosta?');
console.log(linguagemPreferida)

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10
let valor2 = 15
let resultado = valor1 + valor2;
console.log('A soma de ${valor1} e ${valor2} é igual a ${resultado}');

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 20
let valor4 = 21
let resultado1 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado1}`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Digite sua idade:');
if (idade >17) {
   console.log('Maior de idade');
} else {
    console.log('menor de idade');
}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
var numero  = parseFloat(prompt('Digite um número: '));

if (numero > 0) {
    console.log('O número é positivo');
} else if (numero < 0) {
    console.log('O númeor é negativo.');
} else {
    console.log ('O número é zero.');
}

//Use um loop while para imprimir os números de 1 a 10 no console.
let numero1 = 1;
while (numero <= 10) {
    console.log(numero1);
    numero1++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console
let nota = 8; // Substitua pelo valor da nota que desejar testar

if (nota >=7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);
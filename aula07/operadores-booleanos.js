// NOTE: Operadores Booleanos: Comparações
// sinal == compara apenas o valor, enquanto o sinal === compara o tipo e conteúdo
const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 == "10");

// NOTE: sinal != compara valor, não compara o tipo e faz a conversão de tipo enquanto o sinal !== compara o valor e o tipo não fazendo a conversão de tipo.

console.log(numero1 != "10");
console.log(numero1 !== "10");

console.log(numero1 < numero2);
console.log(numero1 > numero2);

console.log(numero1 <= numero2);
console.log(numero1 >= numero2);

const idadePessoa1 = 16;
const idadePessoa2 = 30;

// NOTE: sinal && precisa que as duas variáveis sejam verdadeiras para retornar true
// sinal || não precisa que as duas variáveis sejam verdadeiras para retornar true;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

console.log(!true);

console.log(!(idadePessoa1 >= 18)); // Retorna verdadeiro se a pessoa for menor de idade

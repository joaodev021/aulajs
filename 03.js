const prompt = require("readline-sync");
const idade = prompt.question("Qual é a sua idade? ");
const idadeNumber = Number(idade);
console.log(idadeNumber, typeof idadeNumber);
console.log(idade, typeof idade);
console.log(Number("X"));
// Coerção Explícita (Conversão manual)

console.log(String(10), typeof String(10));
console.log(Boolean(0), typeof Boolean(0));

// Coerção Implícita

console.log(1 + "1");

// NOTE: Qual será a saída desse código?

let n = 1 + "1";

n = n - 1;

console.log(n);

console.log(2 + 3 + 4 + "5");

console.log("5" + 2 + 3 + 4);

console.log("10" - "4" - "3" - 2 + "5", typeof ("10" - "4" - "3" - 2 + "5"));

const prompt = require("readline-sync");

// const idade = Number(prompt.question("Qual é a sua idade? "));

// const maiorDeIdade = idade >= 18;

// NOTE: Estrutura condicional: if/else

// if (idade >= 18) {
//   console.log("Você é maior de idade! ");
// } else {
//   console.log("Você é menor de idade!");
//   console.log("Você não pode entrar!");
// }

// Média >= 7 => aprovado
// Média < 7 e >= 5 => recuperação
// Média < 5 => reprovado

const mediaDoAluno = Number(prompt.question("Média: "));
if (mediaDoAluno >= 7) {
  console.log("Parabéns! Você foi aprovado!");
} else if (mediaDoAluno >= 5) {
  console.log("Você está de recuperação!");
} else {
  console.log("Você foi reprovado!");
}

const fs = require('fs');

// 1. Lendo um arquivo JSON.

// fs.readFile('.prettierrc.json', (erro, dados) => {
//   if (erro) {
//     console.log('Erro ao ler o arquivo', erro);
//   } else {
//     const dadosObjeto = JSON.parse(dados);
//     console.log(dadosObjeto);
//   }
// });

// 2. Convrerter JSON, em formato de string, para objeto.

const jsonString = '{"nome": "João", "idade": 27}';
console.log(JSON.parse(jsonString));

// 3. Converter um objeto do JavaScript para JSON (String).

console.clear();
const pessoa = {
  nome: 'João',
  idade: 27,
};
console.log(JSON.stringify(pessoa));

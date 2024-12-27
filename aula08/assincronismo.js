const fs = require("fs");

// * 1. callbacks
// console.log("ANTES da função de ler o arquivo");
// // Função assincrona (ler um arquivo leva tempo)
// fs.readFile("./aula08/arquivo.txt", (erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log("Erro ao ler o arquivo", erro);
//   } else {
//     console.log(String(conteudoDoArquivo));
//   }
// });
//
// console.log("DEPOIS da função de ler o arquivo");

// Exemplo 2: setTimeout (função que cria um timer)
// console.log("ANTES do setTimeout...");
// setTimeout(() => {
//   console.log("Isso aqui vai ser executado depois de 2 segundos!");
// }, 2 * 1000); // 2 segundos
// console.log("DEPOIS do setTimeout...");

// 2. Promises (promessas)

// console.log("ANTES da criação promise...");
function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("./aula08/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Erro ao ler o arquivo", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}
// Foco a partir daqui...
// lerArquivoPromise()
//   .then((retornoDoResolveDaPromise) => {
//     console.log("Deu certo:", retornoDoResolveDaPromise);
//   })
//   .catch((erro) => {
//     console.log("Deu erro:", erro);
//   })
//   .finally(() => {
//     console.log("Finalizou a promise");
//   });

// 3. async/await
async function lerArquivoAsyncAwait() {
  console.log("Isso vai ser executado antes da promise ser resolvida...");

  try {
    const dadosDoArquivoLido = await lerArquivoPromise(); // espera a promise ser resolvida

    console.log(dadosDoArquivoLido);
    console.log("Isso vai ser executado DEPOIS da promise ser resolvida...");
  } catch (err) {
    console.log(err);
    console.log("Isso aqui é executado depois da promise ser rejeitada...");
  } finally {
    console.log("Finalizou a promise");
  }
}
lerArquivoAsyncAwait();

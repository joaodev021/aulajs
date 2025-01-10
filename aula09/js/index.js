// Fech API

// then/catch

// fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((resposta) => {
//     resposta.json().then((dados) => console.log(dados));
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// async/await

async function obterDadosDoCep() {
  try {
    let resposta = await fetch("https://viacep.com.br/ws/28820000/json/");

    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.log("Deu errado", erro);
  } finally {
    console.log("Finalizou a requisição");
  }
}

obterDadosDoCep();

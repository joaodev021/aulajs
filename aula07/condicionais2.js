// NOTE: Muito útil quando sua váriavel possui valores específicos

const permissoes = "aluno"; // 'professor' || 'aluno' || 'diretor'

switch (permissoes) {
  case "aluno":
    console.log("Você pode assistir as aulas!");
    break;
  case "professor":
    console.log("Você pode dar aulas!");
    break;
  case "diretor":
    console.log("Você pode administrar a escola!");
    break;
  default:
    console.log("Você não tem permissão para acessar o sistema!");
}

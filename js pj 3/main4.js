const alunos = [];
let resposta;
let contador;

alert("Você preencherá uma lista de alunos. Está pronto?");

do {
    const aluno = {};

    aluno.nome = prompt("Qual é o nome do aluno?");
    aluno.disciplina = prompt("Qual é a disciplina?");
    aluno.notaFinal = Number(prompt("Qual é a nota final?"));
    aluno.qtdFaltas = Number(prompt("Quantas faltas?"));

    alunos.push(aluno);

    resposta = confirm("Deseja continuar inserindo alunos?");
} while (resposta);

alunos.sort(function(a, b) {
    return a.nome.localeCompare(b.nome);
});

contador = 0;

if (alunos.length > 0) {
    do {

        if (alunos[contador].nome.startsWith("A")) {

            let situacao;

            if (alunos[contador].notaFinal >= 8) {
                situacao = "Aprovado";
            } else {
                situacao = "Reprovado";
            }

            alert(`Aluno
Nome: ${alunos[contador].nome}
Nota Final: ${alunos[contador].notaFinal}
Faltas: ${alunos[contador].qtdFaltas}
Situação: ${situacao}
`);
        }

        contador++;

    } while (contador < alunos.length);
}

alert(`Quantidade de alunos: ${alunos.length}`);
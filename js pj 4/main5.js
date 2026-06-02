const alunos = [];
let resposta;
let qtdAlunos = 0;

alert("Você preencherá uma lista de alunos. Está pronto?");

do {
    const aluno = {};

    aluno.nome = prompt("Qual é o nome do aluno?");
    aluno.disciplina = prompt("Qual é a disciplina?");
    aluno.notaFinal = Number(prompt("Qual é a nota final?"));
    aluno.qtdFaltas = Number(prompt("Quantas faltas?"));

    alunos.push(aluno);

    qtdAlunos++;

    resposta = confirm("Deseja continuar inserindo alunos?");
} while (resposta);

for (const aluno of alunos) {

    if (aluno.notaFinal >= 8) {

        alert(`Aluno
Nome: ${aluno.nome}
Disciplina: ${aluno.disciplina}
Nota Final: ${aluno.notaFinal}
Faltas: ${aluno.qtdFaltas}
`);

    }

}

alert(`Quantidade de alunos cadastrados: ${qtdAlunos}`);
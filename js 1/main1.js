const computador=[];
const computadores={};
let contador= 0;

alert("Você prencherá uma lista de computadores. Está pronto?")
do {
    computadores.placamae=prompt("Qual é a placa mãe?")
    computadores.processador=prompt("Qual é o processador?")
    computadores.memória=prompt("Qual é a memóra?")
    computadores.gpu=prompt("Qual é a placa de vídeo?")
    computadores.armazenamento=prompt("Qual é o armazenamento?")

    computadores.push(computadores);

    resposta=confirm("Deseja continuar inserindo computadores?")
} while (!resposta==true)

    do {
        alert(`computadores
            Placa-mãe: ${computadores [contador].placamae}
            Processador: ${computadores[contador].processador}
            Memória: ${computadores[contador].memória}
            Placa-de-Vídeo: ${computadores[contador].gpu}
            Armazenamento: ${computadores[contador].armazenamento}
            `);
            contador++;
    } while (contador<computadores.lenght);

    computadores.forEach(computadores => {
            alert(`computadores
                Placa-mãe: ${computadores.placamae}
                Processador: ${computadores.processador}
                Memória: ${computadores.memória}
                Placa-de-Vídeo: ${computadores.gpu}
                Armazenamento: ${computadores.armazenamento}
                `);
    });

    alert(`Quantidade de computadores: ${computadores.lenght}`)
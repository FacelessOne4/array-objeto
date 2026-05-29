const pokemons=[];
let contador= 0;
let resposta;

alert("Você prencherá uma lista de pokemons. Está pronto?")
do {
    const pokemons={};

    pokemons.nome=prompt("Qual é o nome?")
    pokemons.elemento=prompt("Qual é o elemento?")
    pokemons.geracao=prompt("Qual é a geração?")
    pokemons.raridade=prompt("Qual é a raridade?")
    pokemons.funcao=prompt("Qual é a função?")

    pokemons.push(pokemons);

    resposta=confirm("Deseja continuar inserindo pokemons?")
} while (resposta==true)

    do {
        alert(`pokemons
            Nome: ${pokemons [contador].nome}
            Elemento: ${pokemons[contador].elemento}
            Geração: ${pokemons[contador].geracao}
            Raridade: ${pokemons[contador].raridade}
            Função: ${pokemons[contador].funcao}
            `);
            contador++;
    } while (contador<pokemons.length);

    pokemons.forEach(pokemons => {
            alert(`pokemons
                Nome: ${pokemons.nome}
                Elemento: ${pokemons.elemento}
                Geração: ${pokemons.geracao}
                Raridade: ${pokemons.raridade}
                Função: ${pokemons.funcao}
                `);
    });

    alert(`Quantidade de pokemons: ${pokemons.length}`)
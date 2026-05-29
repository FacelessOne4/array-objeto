const carros = [
    {
        marca: "Hyundai Motor Company",
        modelo: "Hyundai HB20",
        cor: "Prateado",
        potencia: "80 cv",
        preco: "90 mil"
    }
];

let contador = 0;
let resposta;

alert("Um carro inicial já foi cadastrado!");

resposta = confirm("Deseja inserir novos carros?");

while (resposta == true) {

    const carro = {};

    carro.marca = prompt("Qual é a marca?");
    carro.modelo = prompt("Qual é o modelo?");
    carro.cor = prompt("Qual é a cor?");
    carro.potencia = prompt("Qual é a potência?");
    carro.preco = prompt("Qual é o preço?");

    carros.push(carro);

    resposta = confirm("Deseja continuar inserindo carros?");
}

do {
    alert(`Carro
marca: ${carros[contador].marca}
modelo: ${carros[contador].modelo}
cor: ${carros[contador].cor}
potencia: ${carros[contador].potencia}
preco: ${carros[contador].preco}
`);

    contador++;
} while (contador < carros.length);

alert(`Quantidade de carros: ${carros.length}`);
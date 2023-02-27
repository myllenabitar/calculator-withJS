var ganhoPorMes = document.querySelector("#ganho-mes");

var horasPorDia = document.querySelector("#horas-dia");

var resposta = document.querySelector("#resposta");

function calcularValorHora(){

    var qtdTotalDeHoras = horasPorDia.valueAsNumber * 23;

    var valorDeHora = (ganhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2);

    resposta.textContent = "R$" + valorDeHora;
}



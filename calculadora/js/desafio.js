var valorHora = document.querySelector("#valor-hora");

var horasProjeto = document.querySelector("#horas-projeto");

var resposta = document.querySelector("#resposta");

function calcular(){

    var calcular = (valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2);

    resposta.textContent = "R$" + calcular;
}
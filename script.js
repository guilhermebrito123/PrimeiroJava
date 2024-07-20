//let nome = window.prompt('Digite seu nome')
//window.alert(`É um prazer te conhecer ${nome}`)

let valor1
let valor2

function somaValores(valor1, valor2){
    console.log(`A soma dos valores é de R$${valor1 + valor2},00`)
} 

somaValores(3500, 4500)

var myModal = document.getElementById('inputEmail4');
myModal.addEventListener('shown.bs.modal', function () {
    var input = document.getElementById('inputEmail4');
    input.removeAttribute('disabled');
});
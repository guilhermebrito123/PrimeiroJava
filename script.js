//let nome = window.prompt('Digite seu nome')
//window.alert(`É um prazer te conhecer ${nome}`)
let valor1
let valor2

function somaValores(valor1, valor2){
    console.log(`A soma dos valores é de R$${valor1 + valor2},00`)
} 

somaValores(3500, 4500)

let num = 4
num **= 2

console.log(num)

let myCar = {
    Model: "BMW",
    Year: "2024",
    Color: "Silver"
}

for (let item in myCar){
    console.log(item, myCar[item])//Respectivamente imprimo quais as propriedades existentes dentro do objeto myCar e em seguida seus valores utilizando colchetes
}
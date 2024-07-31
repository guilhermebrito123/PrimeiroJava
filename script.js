var nome = window.prompt('Digite seu nome')
window.alert(`É um prazer te conhecer ${nome}`)

document.getElementById('name').innerHTML = nome

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

function createBook(title, author, pages){
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function(){
            console.log('Printing...')
        }
    }
    return book
}

//FACTORY (FÁBRICA DE OBJETOS COM CARACTERÍSTICAS SEMELHANTES):
const book1 = createBook("Shakes and pinks","Guilherme de Brito", 300)
const book2 = createBook("Shakes and pinks 2","Guilherme de Brito", 450)

book1.bookColor = 'White'


console.log(book1)
console.log(book2)

//CONSTRUCTOR (MESMA FUNÇÃO DE FACTORY, PORÉM MAIS SIMPLES E MAIS UTILIZADO):
function CreateBook(title, author, pages){
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book3 = new CreateBook("Black Lives Matter", "Pedro Henrique Brito", 500)
console.log(book3)

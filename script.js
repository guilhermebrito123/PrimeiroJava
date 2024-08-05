let nome = window.prompt('Digite seu nome')
window.alert(`É um prazer te conhecer ${nome}`)
let idade = Number(window.prompt('Digite sua idade:'))//Aqui, graças ao "Number", estou dizendo que 
//tudo que for digitado no prompt será convertido para número.
let cla = window.prompt('Digite o nome do seu clã')

document.getElementById('name').innerHTML = nome

if (idade >= 18) {
    document.getElementById('texto').innerHTML = "Você está apto para seguir no caminho ninja! Leia as instruções e clique em avançar."
}
else {
    document.getElementById('texto').innerHTML = "Quando você conquistar a maioridade, poderá se tornar um ninja de verdade!"
}

switch (cla) {
    case "Uchiha", "uchiha", "UCHIHA":
        document.getElementById("cla").innerHTML = "O clã Uchiha é um dos mais poderosos e influentes clãs de Konohagakure, conhecido por sua habilidade ocular única, o Sharingan. Descendentes de Indra Otsutsuki, o filho mais velho do Sábio dos Seis Caminhos, os Uchiha herdaram um chakra poderoso e habilidades espirituais excepcionais. Junto com o clã Senju, eles fundaram a Vila da Folha, mas a rivalidade entre os dois clãs persistiu ao longo dos anos2.O clã Uchiha quase foi extinto após o massacre liderado por Itachi Uchiha, que foi forçado a eliminar sua própria família para evitar uma guerra civil."
            break;
    case "Senju", "senju", "SENJU":
        document.getElementById("cla").innerHTML = "O clã Senju é um dos mais poderosos e influentes de Konohagakure, conhecido por sua versatilidade em ninjutsu, taijutsu e genjutsu. Descendentes de Ashura Otsutsuki, eles herdaram a filosofia da “Vontade do Fogo”, que prega a importância do amor e da paz. Liderados por Hashirama Senju, o Primeiro Hokage, os Senju foram fundamentais na fundação de Konoha, firmando uma trégua histórica com o clã Uchiha."
            break;
    case "Hyuga", "huyga", "HYUGA":
        document.getElementById("cla").innerHTML = "O clã Hyuuga é famoso por seu dojutsu, o Byakugan, que concede uma visão de 360 graus e a capacidade de ver o fluxo de chakra. Descendentes de Hamura Otsutsuki, o clã é dividido em duas famílias: a Principal e a Secundária. A Família Principal comanda o clã, enquanto a Secundária protege seus segredos, muitas vezes à custa de grande sacrifício pessoal."
            break;
    case "Inuzuka", "inuzuka", "INUZUKA":
        document.getElementById("cla").innerHTML = "O clã Inuzuka é conhecido por sua estreita relação com cães ninjas, que são parceiros inseparáveis em combate. Os membros do clã possuem sentidos aguçados, especialmente o olfato, e utilizam técnicas de luta que combinam suas habilidades com as de seus cães. Eles são facilmente reconhecidos pelas marcas vermelhas de presas em suas bochechas."
            break;
    case "Aburame", "aburame", "ABURAME":
        document.getElementById("cla").innerHTML = "O clã Aburame é caracterizado pelo uso de insetos como armas. Desde o nascimento, os membros do clã abrigam insetos em seus corpos, vivendo em simbiose com eles. Esses insetos se alimentam de chakra e obedecem às ordens de seus hospedeiros, tornando-os especialistas em espionagem e combate silencioso."
            break;    
    default:
        "Ajude a transformar seu clã em um clã de renome, treine bastante e evolua como ninja, inspirando as novas gerações a batalharem com honra e ferocidade, sem piedade com os patifes e mafiosos."
            break;
    }

const tempLondon = [15, 8, 3, 12]
tempLondon.push(-13)

console.log(tempLondon)

const tempPositive = tempLondon.every(function (value) {
    if (value >= 0)
        document.getElementById("temperatura").innerHTML = "normal"
    else
        document.getElementById("temperatura").innerHTML = "abaixo da média"
    return value
})



/*let valor1
let valor2

function somaValores(valor1, valor2) {
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

for (let item in myCar) {
    console.log(item, myCar[item])//Respectivamente imprimo quais as propriedades existentes dentro do objeto myCar e em seguida seus valores utilizando colchetes
}

function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function () {
            console.log('Printing...')
        }
    }
    return book
}

//FACTORY (FÁBRICA DE OBJETOS COM CARACTERÍSTICAS SEMELHANTES):
const book1 = createBook("Shakes and pinks", "Guilherme de Brito", 300)
const book2 = createBook("Shakes and pinks 2", "Guilherme de Brito", 450)

book1.bookColor = 'White'


console.log(book1)
console.log(book2)

//CONSTRUCTOR (MESMA FUNÇÃO DE FACTORY, PORÉM MAIS SIMPLES E MAIS UTILIZADO):
function CreateBook(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book3 = new CreateBook("Black Lives Matter", "Pedro Henrique Brito", 500)
console.log(book3)*/

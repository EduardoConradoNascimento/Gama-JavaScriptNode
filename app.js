const livros = require('./database')

// pegar input

const readline = require ('readline-sync')

const entradaInicial = readline.question("Deseja buscar um livro? S/N")

// se S, mostrar categorias, perguntar qual
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log("Essas são as categorias disponivéis:")
    console.log("Romance", "/ Fantasia")

    const entradCategoria = readline.question('Qual categoria você escolhe:')
    
    const retorno = livros.filter(livro => livro.categoria === entradCategoria)

    console.table(retorno)
} else {
    const LivrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis:')
    console.table(LivrosOrdenados)

}


// se não, mostrar todos os livros


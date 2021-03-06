const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const expectedResult1 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(
    (livro) => livro.author.birthYear < 2000 && livro.author.birthYear >= 1900
  );
}

console.log(everyoneWasBornOnSecXX());

const expectedResult2 = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const autores = books.filter(
    (livro) => livro.genre === "Ficção Científica" || livro.genre === "Fantasia"
  );
  const autoresFicCienFan = autores.map((livro) => {
    return livro.author.name;
  });
  return autoresFicCienFan.sort();
}

console.log(fantasyOrScienceFictionAuthors());

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([first, second, third]) => [third, second, first];

console.log(swap(myList));

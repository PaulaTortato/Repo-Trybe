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
const expectedResult1 = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(
    (livro) => livro.releaseYear >= 1980 && livro.releaseYear < 1990
  );
}

console.log(someBookWasReleaseOnThe80s());

const expectedResult2 = [
  "O Senhor dos Anéis",
  "Fundação",
  "O Chamado de Cthulhu",
];

function oldBooks() {
  // escreva seu código aqui
  const livros60Anos = books.filter((livro) => 2021 - livro.releaseYear >= 60);
  const livros = livros60Anos.map((livro) => {
    return livro.name;
  });
  return livros;
}

console.log(oldBooks());

const palio = ["Palio", "Fiat", 2019];
const shelbyCobra = ["Shelby Cobra", "Ford", 1963];
const chiron = ["Chiron", "Bugatti", 2016];

// escreva toObject abaixo
const toObject = ([model, brand, year]) => ({ model, brand, year });

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

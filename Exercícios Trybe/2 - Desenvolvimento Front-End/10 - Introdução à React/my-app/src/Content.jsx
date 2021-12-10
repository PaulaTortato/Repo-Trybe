import React, { Component } from "react";

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      conteudos.map((conteudo) =>
        <ul key={conteudo.conteudo}>
          <li>O conteúdo é: {conteudo.conteudo}</li>
          <li>Status: {conteudo.status}</li>
          <li>Bloco: {conteudo.bloco}</li>
        </ul>)
    )
  }
}

export default Content;
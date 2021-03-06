let selecBox = document.getElementById("estado");
let estadosBr = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];
let siglas = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
let btn = document.getElementById("btn-enviar");
let divContainer = document.getElementById("div-container");

for (let i = 0; i < estadosBr.length; i += 1) {
  let novaOp = document.createElement("option");
  novaOp.innerText = estadosBr[i];
  novaOp.value = siglas[i];
  selecBox.appendChild(novaOp);
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  let inputs = document.querySelectorAll("input[type='text']");
  let labels = document.getElementsByClassName('form-label');
  let checked = document.querySelector("input[type='radio']:checked")
  let estados = document.getElementById('estado');
  let resumo = document.getElementById('resumo');
  let estadoSelec = '';
  for (let i = 0; i < estados.children.length; i += 1) {
    if (estados.children[i].selected) {
      estadoSelec = estados.children[i].innerText;
    }
  }
  for (let i = 0; i < labels.length; i += 1) {
    if (labels[i].value === "") {
      let div = document.createElement("div");
      div.style.color = "red";
      div.innerText =
        "Preencha o campo: " + labels[i].innerText;
      divContainer.appendChild(div);
    } else if (div.innerText.includes("Preencha")) {
      break;
    } else {
      let div = document.createElement("div");
      if (labels[i].innerText === 'Tipo') {
        div.innerText =
        labels[i].innerText + ": " + checked.nextElementSibling.innerText;
        divContainer.appendChild(div);
      } else if (labels[i].innerText === 'Estado') {
        div.innerText =
        labels[i].innerText + ": " + estadoSelec;
        divContainer.appendChild(div);
      } else if (labels[i].innerText === 'Resumo') {
        div.innerText = labels[i].innerText + ": " + resumo.value;
        divContainer.appendChild(div);
      } else {
      div.innerText =
        labels[i].innerText + ": " + inputs[i].value;
      divContainer.appendChild(div);
    }
    }
  }
});

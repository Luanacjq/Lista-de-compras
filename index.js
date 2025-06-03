const inputItem = document.getElementById("input-item")
const listaDeCompra = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(inputItem.value);
    if (inputItem.value === ""){
        alert("Por favor, insira um item!");
        return
    }

    const itemDalista = document.createElement("li");
    const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDalista.appendChild(containerItemDaLista)
    listaDeCompra.appendChild(itemDalista)

})
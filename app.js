// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const inputSecreto = document.getElementById("amigo");
 function agregarAmigo() {
if (inputSecreto.value == "") {
    alert("Por favor, inserte un nombre.")
    }
    amigos.push(inputSecreto.value);
    inputSecreto.value = "";
    actualizarLista();
 }
 function actualizarLista() {
    const ulListaDeAmigos = document.getElementById("listaAmigos");
    ulListaDeAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const ingreseAmigo = document.createElement("li"); 
        ingreseAmigo.textContent = amigos[i]; 
        ulListaDeAmigos.appendChild(ingreseAmigo)
    }
 }
 function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const resultadoAmigo = document.getElementById("resultado");
    const sorteoAmigo = Math.floor(Math.random() * amigos.length);
    const aleatorio = amigos[sorteoAmigo];
    resultadoAmigo.innerHTML = `<li>Mi amigo secreto es:${aleatorio}</li>`;
 }
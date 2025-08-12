// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Código JavaScript para el juego de Amigo Secreto

//Declaramos el arreglo
let amigos = [];
const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; //Valida cadena de texto

//Funcion para agregar un amigo
function agregarAmigo(){
    let nombredeAmigos = document.getElementById('amigo').value.trim();
    if (nombredeAmigos !== ""){
        let nombreMayusculas = (nombredeAmigos);
        if (amigos.includes(nombredeAmigos)) {
            alert("Este amigo ya está en la lista."); //Evita nombres duplicados
            return;
        }
    if (!regex.test(nombredeAmigos)) {
        alert("El nombre contiene caracteres no permitidos."); //Evita caracteres no permitidos
        return null;
        }
      if (!isNaN(nombredeAmigos)) {
        alert("El nombre no puede ser un número."); //Evita que se ingresen números
       return null;
        }
        amigos.push(nombredeAmigos);
        limpiarCaja();
        actualizarLista();
        console.log(amigos);
    } else{
        alert("Por favor, inserte un nombre válido.");
    }
}

//Funcion para actualizar la lista de amigos
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
       let item = document.createElement("li"); 
        item.textContent = amigos[i]; 
        lista.appendChild(item); 
    }
}

//Funcion para sortear un amigo
function sortearAmigo(){
     if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, ingrese algunos nombres.");
    return; 
  }
    const nombreAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[nombreAleatorio]; 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>✅ Tu amigo sorteado es: </> ${amigoSorteado}</li>`;
}

//Funcion para limpiar el campo de entrada
function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

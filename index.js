let tiempo;
let hora;
let minuto;
let segundo;
let dia;
let franja;

let intermedia = {
  nombre: "intermedia",
  precio: "intermedio",
  siguiente: "punta",
  color: "orange"
};

let intermediaX = {
  nombre: "intermedia",
  precio: "intermedio",
  siguiente: "valle",
  color: "orange"
};

let punta = {
  nombre: "punta",
  precio: "caro",
  siguiente: "intermedia",
  color: "red"
};

let valle = {
  nombre: "valle",
  precio: "barato",
  siguiente: "intermedia",
  color: "green"
};

reloj();

//Lógica para acoplar las horas a las franjas
if ((hora >= 8 && hora < 10) || (hora >= 14 && hora < 18)) {
  franja = intermedia;
} else if (hora >= 22 && hora < 0) {
  franja = intermediaX;
} else if (hora >= 18 && hora < 22) {
  franja = punta;
} else if (hora >= 0 && hora < 8) {
  franja = valle;
}

//Acoplamos días a la fecha
let semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

//Acoplamos color al reloj
document.getElementById("div").style.backgroundColor = franja.color;


//Reloj
function reloj() {
  tiempo = new Date();
  hora = tiempo.getHours();
  minuto = tiempo.getMinutes();
  segundo = tiempo.getSeconds();
  dia = tiempo.getDay();

  hora < 10 ? (hora = `0${hora}`) : hora;
  minuto < 10 ? (minuto = `0${minuto}`) : minuto;
  segundo < 10 ? (segundo = `0${segundo}`) : segundo;

  document.getElementById(
    "div"
  ).innerHTML = `<h1>${hora} : ${minuto} : ${segundo}</h1>`;
  
}
sem();
function sem() {
  document.getElementById("dia").innerHTML = `<h2>${semana[dia].toUpperCase()}</h2>`;
}

//Carga del reloj constantemente
window.onload = function () {
  setInterval(reloj(), 1000);
};

//Indicador de franja
document.getElementById(
  "franja"
).innerHTML = `<h2>${franja.nombre.toUpperCase()}</h2>`;
document.getElementById("franja").style.color = franja.color;

//Indicador de franja siguiente
document.getElementById(
  "siguiente"
).innerHTML = `Siguiente: ${franja.siguiente}`;


//Pruebas
console.log(hora);
console.log(minuto);
console.log(segundo);
console.log(franja);
console.log(semana[dia])
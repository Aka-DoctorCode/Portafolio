// declarar la función
function reloj() {
    // capturar la hora al momento de llamar la fución
    let fecha = new Date();
    // desglosando información para obtener solo la hora
    let hora = fecha.toLocaleTimeString();
    // mostrar funcion en el elemento con le id reloj.
    document.getElementById("reloj").innerText = hora
}
// iniciar función cada 1000 mseg
setInterval(reloj, 1000);

// declarar la función
function fecha() {
  // capturar la fecha al momento de llamar la fución
  let fecha = new Date();
  // desglosando información para obtener solo la fecha
  let dia = fecha.toLocaleDateString();
  // mostrar funcion en el elemento con le id reloj.
  document.getElementById("fecha").innerText = dia
}
// iniciar función cada 1000 mseg
setInterval(fecha, 1000);
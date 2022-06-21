let horas = 22;
let minutos = 0;
let segundos = 0;
cargarSegundo();

//los segundos
function cargarSegundo() {
  let txtSegundos;

  if (segundos < 0) {
    segundos = 59;
  }

  //los segundos en la pantalla
  if (segundos < 10) {
    txtSegundos = `0${segundos}`;
  } else {
    txtSegundos = segundos;
  }
  document.getElementById("segundos").innerHTML = txtSegundos;
  segundos--;

  cargarMinutos(segundos);
}

//los minutos
function cargarMinutos(segundos) {
  let txtMinutos;

  if (segundos == -1 && minutos !== 0) {
    setTimeout(() => {
      minutos--;
    }, 500);
  } else if (segundos == -1 && minutos == 0) {
    setTimeout(() => {
      minutos = 59;
    }, 500);
  }

  //mostrar minutos en pantalla
  if (minutos < 10) {
    txtMinutos = `0${minutos}`;
  } else {
    txtMinutos = minutos;
  }
  document.getElementById("minutos").innerHTML = txtMinutos;
  cargarHoras(segundos, minutos);
}

//horas
function cargarHoras(segundos, minutos) {
  let txtHoras;

  if (segundos == -1 && minutos == 0 && horas !== 0) {
    setTimeout(() => {
      horas--;
    }, 500);
  } else if (segundos == -1 && minutos == 0 && horas == 0) {
    setTimeout(() => {
      horas = 2;
    }, 500);
  }

  //Las horas en la pantalla
  if (horas < 10) {
    txtHoras = `0${horas}`;
  } else {
    txtHoras = horas;
  }
  document.getElementById("horas").innerHTML = txtHoras;
}

//cada segundo
setInterval(cargarSegundo, 1000);
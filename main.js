
  let horas = 22;
  let minutos = 0;
  let segundos = 0;
  cargarSegundo();

//segundos
function cargarSegundo() {

  let txtSegundos =0;

  if (segundos < 0) {
    segundos = 59;
  }

  //segundos en pantalla
   if (segundos < 10) {
    txtSegundos = "0"+segundos;
    document.getElementById("segundos").innerHTML = txtSegundos;
  } else {
    txtSegundos = segundos;

    document.getElementById("segundos").innerHTML = txtSegundos;
  } 
  segundos--;
  cargarMinutos(segundos);
}

//minutos
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

//cada segundo
setInterval(cargarSegundo,1);
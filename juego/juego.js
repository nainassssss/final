var imagenesArray = new Array ('img/celiacruz.jpg','img/cheofeliciano.jpg','img/hectorlavoe.jpg','img/ismaelrivera.jpg','img/joecuba.jpg','img/johnnypacheco.jpg','img/raybarreto.jpg','img/rubenblades.jpg','img/titopuente.jpg','img/williecolon.jpg');
var respuestasArray = new Array ('Celia Cruz','Cheo Feliciano','Hector Lavoe','Ismael Rivera','Joe Cuba','Johnny Pacheco','Ray Barreto','Ruben Blades', 'Tito Puente', 'Willie Colon');
var primerboton = new Array('Celia Cruz','Joe Cuba','Tito Puente','Ismael Rivera', 'Roberto Roena','Johnny Pacheco', 'Roberto Roena', 'Bobby Valentin', 'Adalberto Santiago', 'Willie Colon');
var segundoboton = new Array('Etta James', 'Eddie Palmieri', 'Hector Lavoe', 'Machito', 'Joe Cuba', 'Andy Harlow', 'Larry Harlow', 'Ruben Blades', 'Tito Puente', 'Justo Betancourt' );
var tercerboton = new Array('La Lupe', 'Cheo Feliciano', 'Willie Colon', 'Ruben Blades', 'Ismael Quintana', 'Charlie Palmieri', 'Ray Barreto', 'Angel Canales', 'Papo Lucca', 'Ismael Miranda');
var pistasArray = new Array('Apodada La reina de la salsa', 'Apodado El sonero mayor', 'Conocido como El cantante', 'El sonero mayor', 'El alcalde del barrio', 'El maestro de la flauta', 'El rey del hard bop latino', 'El poeta de la salsa', 'El rey del timbal', 'El malo');
var pistaUsada = false;
var puntuacion = 0;
var pasos = 0;
function Iniciar(){
    //esconde boton de inicio y activa las preguntas.
      document.getElementById('containerinicio').style.display='none';
      document.getElementById('containerjuego').style.display='flex';
      document.getElementById('rta1').innerHTML= primerboton[pasos];
      document.getElementById('rta2').innerHTML=segundoboton[pasos];
      document.getElementById('rta3').innerHTML=tercerboton[pasos];
      document.getElementById('imagenMusico').src=imagenesArray[pasos];
      document.getElementById('npregunta').innerHTML= 'pregunta numero 1';
}
function siguiente(){
  if(pasos < respuestasArray.length){
  document.getElementById('rta1').innerHTML= primerboton[pasos];
  document.getElementById('rta2').innerHTML=segundoboton[pasos];
  document.getElementById('rta3').innerHTML=tercerboton[pasos];
  document.getElementById('imagenMusico').src=imagenesArray[pasos];
  document.getElementById('npregunta').innerHTML= 'pregunta numero ' + (pasos + 1);
  pistaUsada= false
  }else{
    final();
  }
}
function final(){
  document.getElementById('containerjuego').style.display='none';
  document.getElementById('containerfin').style.display='flex';
  document.getElementById('resultado').innerHTML='Tu puntaje es de ' + puntuacion + '/20 puntos';
}

function reinicio(){
  document.getElementById('containerinicio').style.display='flex';
  document.getElementById('containerjuego').style.display='none';
  document.getElementById('containerfin').style.display='none';
  puntuacion = 0;
  pasos=0; 
}

function pista(){
  if(!pistaUsada){
    pistaUsada=true;
    alert(pistasArray[pasos])
  }else{
    alert('Ya usaste esa pista!')
  }
}
function rta1(){
  if(primerboton[pasos] == respuestasArray[pasos]) {
    if(pistaUsada==true){
    puntuacion ++;
    }else{
      puntuacion= puntuacion + 2;
    }
    pasos++;
  alert('Correcto!')
 siguiente();
  }else{
    pasos++;
    alert('incorrecto')
    siguiente();
  }
}
function rta2(){
  if(segundoboton[pasos] == respuestasArray[pasos]){
    if(pistaUsada==true){
      puntuacion ++;
      }else{
        puntuacion = puntuacion + 2;
      }
 pasos++;
 alert('Correcto!')
 siguiente();
  }else{
    pasos++;
    alert('incorrecto')
   siguiente();
  }
}
function rta3(){
  if(tercerboton[pasos] == respuestasArray[pasos]){
    if(pistaUsada==true){
      puntuacion ++;
      }else{
        puntuacion = puntuacion + 2;
      }
 pasos ++;
 alert('Correcto!')
 siguiente();
  }else{
    pasos++;
    alert('incorrecto')
  siguiente();
  }
}



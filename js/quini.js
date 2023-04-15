const quiniUno = [3, 9, 25, 29, 30, 45];
const quiniDos = [3, 7, 20, 21, 39, 45];
const quiniTres = [0, 1, 16, 22, 37, 41];

const checkBtnQuini = document.getElementById("check-btn-quini");
const resultado = document.getElementById("resultado");
const numero = document.getElementById("numero");
const resultado1 = document.getElementById("resultado1");
const numero1 = document.getElementById("numero1");
const resultado2 = document.getElementById("resultado2");
const numero2 = document.getElementById("numero2");
const carton1 = document.getElementById("cartonUno");
const carton2 = document.getElementById("cartonDos");
const carton3 = document.getElementById("cartonTres");

checkBtnQuini.addEventListener("click", function (e) {
  e.preventDefault();
  let dato = [];   //let dato1 = [];  //let dato2 = [];
  let aciertos = [];
  let aciertos1 = [];
  let aciertos2 = [];
  //let contador = 0;  //let contador1 = 0;  //let contador2 = 0;

  dato.push(parseInt(document.getElementById("user-number-1").value));
  dato.push(parseInt(document.getElementById("user-number-2").value));
  dato.push(parseInt(document.getElementById("user-number-3").value));
  dato.push(parseInt(document.getElementById("user-number-4").value));
  dato.push(parseInt(document.getElementById("user-number-5").value));
  dato.push(parseInt(document.getElementById("user-number-6").value));

  for (let i = 0; i < dato.length; i++) {
    if (quiniUno.includes(dato[i])) {
      //contador++;
      if (
        quiniUno[0] === dato[i] ||
        quiniUno[1] === dato[i] ||
        quiniUno[2] === dato[i] ||
        quiniUno[3] === dato[i] ||
        quiniUno[4] === dato[i] ||
        quiniUno[5] === dato[i]
      ) {
        aciertos.push(dato[i]);
      }
    }
    if (quiniDos.includes(dato[i])) {
      //contador1++;
      if (
        quiniDos[0] === dato[i] ||
        quiniDos[1] === dato[i] ||
        quiniDos[2] === dato[i] ||
        quiniDos[3] === dato[i] ||
        quiniDos[4] === dato[i] ||
        quiniDos[5] === dato[i]
      ) {
        aciertos1.push(dato[i]);
      }
    }
    if (quiniTres.includes(dato[i])) {
      //contador2++;
      if (
        quiniTres[0] === dato[i] ||
        quiniTres[1] === dato[i] ||
        quiniTres[2] === dato[i] ||
        quiniTres[3] === dato[i] ||
        quiniTres[4] === dato[i] ||
        quiniTres[5] === dato[i]
      ) {
        aciertos2.push(dato[i]);
      }
    }
  }

  if (aciertos.length != 0) {
    carton1.innerHTML = `Carton N#1: [${quiniUno}], tiene: ${aciertos.length} aciertos.`; 
    //resultado.innerHTML = `Felicidades! Ana tienes ${aciertos.length} aciertos.`; 
    numero.innerHTML = `números acertados: ${aciertos}`; 
  } else {
    carton1.innerHTML = `Carton N#1: [${quiniUno}], NO tiene aciertos`; 
    //resultado.innerHTML = `Lo siento Ana no tienes aciertos.`; 
  }

  /*
  for (let j = 0; j < dato.length; j++) {
    if (quiniDos.includes(dato[i]))  {  
       contador2++;    
       if (quiniDos[0] === dato[i] || quiniDos[1] === dato[i] || quiniDos[2] === dato[i] || quiniDos[3] === dato[i] || quiniDos[4] === dato[i] || quiniDos[5] === dato[i]){
          aciertos1.push(dato[i]);
        }   
    }
  };
 */

  if (aciertos1.length != 0) {
    carton2.innerHTML = ` Carton N#2: [${quiniDos}], tiene: ${aciertos1.length} aciertos.`; 
    //resultado1.innerHTML = `Felicidades! Ana tienes ${aciertos1.length} aciertos.`; 
    numero1.innerHTML = `números acertados: ${aciertos1}`; 
  } else {
    carton2.innerHTML = `Carton N#2: [${quiniDos}], NO tiene aciertos`;
    //resultado1.innerHTML = `Lo siento Ana no tienes aciertos.`;
  }

  /*
  for (let k = 0; k < dato.length; k++) {
     if (quiniTres.includes(dato[i]))  {  
       contador2++;    
       if (quiniTres[0] === dato[i] || quiniTres[1] === dato[i] || quiniTres[2] === dato[i] || quiniTres[3] === dato[i] || quiniTres[4] === dato[i] || quiniTres[5] === dato[i]){
          aciertos1.push(dato[i]);
        }   
    }
  };   
  */

  if (aciertos2.length != 0) {
    carton3.innerHTML = `Carton N#3: [${quiniTres}], tiene: ${aciertos2.length} aciertos `; 
    //resultado2.innerHTML = `Felicidades! Ana tienes  ${aciertos2.length} aciertos.`; 
    numero2.innerHTML = `números acertados: ${aciertos2}`; 
  } else {
    carton3.innerHTML = `Carton N#3: [${quiniTres}], NO tiene aciertos `; 
    //resultado2.innerHTML = `Lo siento Ana no tienes aciertos.`;
  }


});

function validarNroQuini(element) {
  if (isNaN(element.value) || !element.value || element.value.trim()==" " || element.value < 0 || element.value > 45) {
    alert("Por favor, ingrese un número válido entre 0 y 45.");
    element.value = "";
    element.focus();
    return;
  }
};



/*

const quiniUno = [3, 9, 25, 29, 30, 45];
const quiniDos = [3, 7, 20, 21, 39, 45];
const quiniTres = [0, 1, 16, 22, 37, 41];

const checkBtn = document.getElementById("check-btn-quini");
const result = document.getElementById("result");
const numeros = document.getElementById("numeros");
const carton1 = document.getElementById("cartonUno");
const carton2 = document.getElementById("cartonDos");
const carton3 = document.getElementById("cartonTres");

checkBtn.addEventListener("click", function() {
  let userNumbers = [];

  for (let i = 1; i <= 6; i++) {
    userNumbers.push(parseInt(document.getElementById(`user-number-${i}`).value));
  }

  let aciertos = userNumbers.filter(num => quiniUno.includes(num));

  if (aciertos.length > 0) {
    carton1.innerHTML = `Carton Nro 1: ${quiniUno}`;
    result.innerHTML = `Felicidades! Tienes ${aciertos.length} aciertos.`;
    numeros.innerHTML = `Números acertados: ${aciertos}`;
  } else {
    carton1.innerHTML = `Carton Nro 1: ${quiniUno}`;
    result.innerHTML = `Lo siento, no tienes aciertos.`;
  }
});

const quiniUno = [3, 9, 25, 29, 30, 45];
const quiniDos = [3, 7, 20, 21, 39, 45];
const quiniTres = [0, 1, 16, 22, 37, 41];

const checkBtn = document.getElementById("check-btn-quini");
const result = document.getElementById("result");
const numeros = document.getElementById("numeros");
const carton1 = document.getElementById("cartonUno");
const carton2 = document.getElementById("cartonDos");
const carton3 = document.getElementById("cartonTres");

checkBtn.addEventListener("click", function() {
  let userNumbers = [];

  for (let i = 1; i <= 6; i++) {
    userNumbers.push(parseInt(document.getElementById(`user-number-${i}`).value));
  }

  let aciertos = userNumbers.filter(num => quiniUno.includes(num));

  if (aciertos.length > 0) {
    carton1.innerHTML = `Carton Nro 1: ${quiniUno}`;
    result.innerHTML = `Felicidades! Tienes ${aciertos.length} aciertos.`;
    numeros.innerHTML = `Números acertados: ${aciertos}`;
  } else {
    carton1.innerHTML = `Carton Nro 1: ${quiniUno}`;
    result.innerHTML = `Lo siento, no tienes aciertos.`;
  }
});
*/

const brincoUno = [13, 20, 21, 24, 38, 39];
const brincoDos = [7, 9, 24, 28, 29, 30];

const checkBtnBrinco = document.getElementById("check-btn-brinco");
const resultado = document.getElementById("resultado");
const numero = document.getElementById("numero");
const resultado1 = document.getElementById("resultado1");
const numero1 = document.getElementById("numero1");
const carton1 = document.getElementById("cartonUno");
const carton2 = document.getElementById("cartonDos");

checkBtnBrinco.addEventListener("click", function (e) {
  e.preventDefault();
  let dato = [];   //let dato1 = [];
  let aciertos = [];
  let aciertos1 = [];
  //let contador = 0; //let contador1 = 0;

  dato.push(parseInt(document.getElementById("user-number-1").value));
  dato.push(parseInt(document.getElementById("user-number-2").value));
  dato.push(parseInt(document.getElementById("user-number-3").value));
  dato.push(parseInt(document.getElementById("user-number-4").value));
  dato.push(parseInt(document.getElementById("user-number-5").value));
  dato.push(parseInt(document.getElementById("user-number-6").value));

  for (let i = 0; i < dato.length; i++) {
    if (brincoUno.includes(dato[i])) {
      //contador++;
      if (
        brincoUno[0] === dato[i] ||
        brincoUno[1] === dato[i] ||
        brincoUno[2] === dato[i] ||
        brincoUno[3] === dato[i] ||
        brincoUno[4] === dato[i] ||
        brincoUno[5] === dato[i]
      ) {
        aciertos.push(dato[i]);
      }
    }
    if (brincoDos.includes(dato[i])) {
      //contador1++;
      if (
        brincoDos[0] === dato[i] ||
        brincoDos[1] === dato[i] ||
        brincoDos[2] === dato[i] ||
        brincoDos[3] === dato[i] ||
        brincoDos[4] === dato[i] ||
        brincoDos[5] === dato[i]
      ) {
        aciertos1.push(dato[i]);
      }
    }
  }

  if (aciertos.length != 0) {
    carton1.innerHTML = `Carton N#1: [${brincoUno}], tiene: ${aciertos.length} acierto/s.`; 
    //resultado.innerHTML = `Felicidades! Ana tienes : ${aciertos.length} `; 
    numero.innerHTML = `números acertados: ${aciertos}`; 
  } else {
    carton1.innerHTML = `Carton N#1: [${brincoUno}], NO tiene aciertos`; 
    //resultado.innerHTML = `Lo siento Ana no tienes aciertos.`; 
  }

  /*
  for (let i = 0; i < dato.length; i++) {
    if (brincoDos.includes(dato[i]))  {      
      contador1++;
      if (brincoDos[0] === dato[i] || brincoDos[1] === dato[i] || brincoDos[2] === dato[i] || brincoDos[3] === dato[i] || brincoDos[4] === dato[i] || brincoDos[5] === dato[i]){
        aciertos1.push(dato[i]);
      }    
    }
  };
  */
  if (aciertos1.length != 0) {
    carton2.innerHTML = `Carton N#2: [${brincoDos}], tiene: ${aciertos1.length} acierto/s.`;
    //resultado1.innerHTML = `Felicidades! Ana tienes ${aciertos1.length} aciertos.`;
    numero1.innerHTML = `números acertados: ${aciertos1}`;
  } else {
    carton2.innerHTML = `Carton N#2: [${brincoDos}], NO tiene aciertos`;
    //resultado1.innerHTML = `Lo siento Ana no tienes aciertos.`;
  }
});

function validarRangoBrinco(elemento){
  var numero = parseInt(elemento.value,10);
  //Validamos que se haya ingresado solo numeros y no cadenas de caracteres
  if(isNaN(numero) || (!Number.isInteger(numero) || (numero === null))){
    alert('Verifique datos, debe Ingresar solo números.');
    elemento.focus();
    elemento.select();
    return false;
  }
  //Validamos que se cumpla el rango entre 00 y 39
  if(numero<00 || numero>39){
    alert('Recuerde, sólo se permite el números entre : 00 - 39');
    elemento.focus();
    return false;
  }
  return true;
};
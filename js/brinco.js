const brincoUno = [13, 20, 21, 24, 38, 39];
const brincoDos = [7, 9, 24, 28, 29, 30];

const checkBtn = document.getElementById("check-btn-brinco");
const result = document.getElementById("result");
const numeros= document.getElementById("numeros");
const resul = document.getElementById("resul");
const numero= document.getElementById("numero");
const carton1 = document.getElementById("cartonUno");
const carton2 = document.getElementById("cartonDos");


checkBtn.addEventListener("click", function() { 
  let dato = [];
  let aciertos = [];
  let aciertos1 = [];   
  let contador = 0;
  let contador1 = 0; 
  dato.push(parseInt(document.getElementById("user-number-1").value));
  dato.push(parseInt(document.getElementById("user-number-2").value));
  dato.push(parseInt(document.getElementById("user-number-3").value));
  dato.push(parseInt(document.getElementById("user-number-4").value));
  dato.push(parseInt(document.getElementById("user-number-5").value));
  dato.push(parseInt(document.getElementById("user-number-6").value));  

  for (let i = 0; i < dato.length; i++) {
    if (brincoUno.includes(dato[i]) || brincoDos.includes(dato[i]))  { 
      contador++;
      if (brincoUno[0] === dato[i] || brincoUno[1] === dato[i] || brincoUno[2] === dato[i] || brincoUno[3] === dato[i] || brincoUno[4] === dato[i] || brincoUno[5] === dato[i]){
        aciertos.push(dato[i]);
      }    
      contador1++;
      if (brincoDos[0] === dato[i] || brincoDos[1] === dato[i] || brincoDos[2] === dato[i] || brincoDos[3] === dato[i] || brincoDos[4] === dato[i] || brincoDos[5] === dato[i]){
        aciertos1.push(dato[i]);
      }    
    }
  };
 
  if (contador != 0) {
    carton1.innerHTML ="Carton Nro 1  :   " + brincoUno;
    result.innerHTML = "Felicidades! Ana tienes   "+ aciertos.length +" aciertos.";
    numeros.innerHTML = "números acertados:   "+ aciertos;
  }else{
    carton1.innerHTML ="Carton Nro 1  :   " + brincoUno;
    result.innerHTML = "Lo siento Ana no tienes aciertos.";
  }; 

  if (contador1 != 0) {
    carton2.innerHTML = "Carton Nro 2  :   " + brincoDos;
    resul.innerHTML = "Felicidades! Ana tienes   "+ aciertos1.length +" aciertos.";
    numero.innerHTML = "números acertados:   "+ aciertos1;
  }else{
    carton2.innerHTML ="Carton Nro 2  :   " + brincoDos;
    resul.innerHTML = "Lo siento Ana no tienes aciertos.";    
  }; 
 
});





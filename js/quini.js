const quiniUno = [3, 9, 25, 29, 30, 45];
const quiniDos = [3, 7, 20, 21, 39, 45];
const quiniTres = [0, 1, 16, 22, 37, 41];

const checkBtn = document.getElementById("check-btn-quini");
const result = document.getElementById("result");
const numeros= document.getElementById("numeros");
const resul = document.getElementById("resul");
const numero= document.getElementById("numero");
const res = document.getElementById("res");
const num= document.getElementById("num");
const carton1 = document.getElementById("cartonUno");
const carton2 = document.getElementById("cartonDos");
const carton3 = document.getElementById("cartonTres");

checkBtn.addEventListener("click", function() {
  let dato = [];
  let aciertos = [];
  let aciertos1 = [];
  let aciertos2 = [];
  let contador = 0;
  let contador1 = 0;  
  let contador2 = 0;

  dato.push(parseInt(document.getElementById("user-number-1").value));
  dato.push(parseInt(document.getElementById("user-number-2").value));
  dato.push(parseInt(document.getElementById("user-number-3").value));
  dato.push(parseInt(document.getElementById("user-number-4").value));
  dato.push(parseInt(document.getElementById("user-number-5").value));
  dato.push(parseInt(document.getElementById("user-number-6").value)); 

  for (let i = 0; i < dato.length; i++) {
    if (quiniUno.includes(dato[i]))  {      
           contador++;
        if (quiniUno[0] === dato[i] || quiniUno[1] === dato[i] || quiniUno[2] === dato[i] || quiniUno[3] === dato[i] ||quiniUno[4] === dato[i] || quiniUno[5] === dato[i]){
          aciertos.push(dato[i]); 
        } 
    }
    if (quiniDos.includes(dato[i]))  {  
        contador1++;    
        if (quiniDos[0] === dato[i] || quiniDos[1] === dato[i] || quiniDos[2] === dato[i] || quiniDos[3] === dato[i] || quiniDos[4] === dato[i] || quiniDos[5] === dato[i]){
          aciertos1.push(dato[i]);
        }   
    }
    if (quiniTres.includes(dato[i]))  {  
      contador2++;    
      if (quiniTres[0] === dato[i] || quiniTres[1] === dato[i] || quiniTres[2] === dato[i] || quiniTres[3] === dato[i] || quiniTres[4] === dato[i] || quiniTres[5] === dato[i]){
       aciertos2.push(dato[i]);
      }   
    }
  };
 
  if (contador != 0) {
    carton1.innerHTML ="Carton Nro 1  :   " + quiniUno;
    result.innerHTML = "Felicidades! Ana tienes   "+ aciertos.length +" aciertos.";
    numeros.innerHTML = "números acertados:   "+ aciertos;
  }else{
    carton1.innerHTML ="Carton Nro 1  :   " + quinisUno;
    result.innerHTML = "Lo siento Ana no tienes aciertos.";
  };
  
  /*for (let j = 0; j < dato1.length; j++) {
    if (quiniDos.includes(dato1[i]))  {  
       contador2++;    
       if (quiniDos[0] === dato1[i] || quiniDos[1] === dato1[i] || quiniDos[2] === dato1[i] || quiniDos[3] === dato1[i] || quiniDos[4] === dato1[i] || quiniDos[5] === dato1[i]){
          aciertos1.push(dato1[i]);
        }   
    }
  };*/
 
  if (contador1 != 0) {
    carton2.innerHTML = "Carton Nro 2  :   " +quiniDos;
    resul.innerHTML = "Felicidades! Ana tienes  "+ aciertos1.length +" aciertos.";
    numero.innerHTML = "números acertados:   "+ aciertos1;
  }else{
    carton2.innerHTML ="Carton Nro 2  :   " + quiniDos;
    resul.innerHTML = "Lo siento Ana no tienes aciertos.";
    
  };  
  
  /*for (let k = 0; k < dato2.length; k++) {
     if (quiniTres.includes(dato2[i]))  {  
       contador2++;    
       if (quiniTres[0] === dato2[i] || quiniTres[1] === dato2[i] || quiniTres[2] === dato2[i] || quiniTres[3] === userdato2[i] || quiniTres[4] === dato2[i] || quiniTres[5] === dato2[i]){
          aciertos1.push(dato2[i]);
        }   
    }
  };*/
   
  if (contador2 != 0) {
    carton3.innerHTML = "Carton Nro 3  :   " + quiniTres;
    res.innerHTML = "Felicidades! Ana tienes    "+ aciertos2.length +" aciertos.";
    num.innerHTML = "números acertados:    "+ aciertos2;
  }else{
    carton3.innerHTML ="Carton Nro 3  :   " + quiniTres;
    res.innerHTML = "Lo siento Ana no tienes aciertos.";    
  };
  

});



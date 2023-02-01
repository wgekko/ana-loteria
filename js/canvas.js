var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

var ctx= micanvas.getContext("2d");
var miimagen1= new Image();
miimagen1.src="/img/logo_brinco_1.png";
var miimagen2= new Image();
miimagen2.src="/img/logo_quini_1.png";

miimagen1.onload=function(){
    ctx.drawImage(miimagen1,0,20);
}

miimagen2.onload=function(){
    ctx.drawImage(miimagen2,400,20);
}





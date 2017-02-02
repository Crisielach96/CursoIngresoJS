/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var pnumero;
var snumero;
var resultado;
var msj;
pnumero=document.getElementById("numeroUno").value;
snumero=document.getElementById("numeroDos").value;
pnumero=parseInt(pnumero);
snumero=parseInt(snumero);
resultado=+pnumero+snumeroñ;
msj="La suma es de " +resultado;
alert(msj);
}


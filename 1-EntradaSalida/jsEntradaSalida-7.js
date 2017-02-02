/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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
resultado=+pnumero+snumero
msj="la suma es de "+resultado
alert(msj)
}

function restar()
{
	var pnumero;
var snumero;
var resultado;
var msj;
pnumero=document.getElementById("numeroUno").value;
snumero=document.getElementById("numeroDos").value;
pnumero=parseInt(pnumero);
snumero=parseInt(snumero);
resultado=+pnumero-snumero
msj="la resta es de "+resultado
alert(msj)
}

function multiplicar()
{ 
var pnumero;
var snumero;
var resultado;
var msj;
pnumero=document.getElementById("numeroUno").value;
snumero=document.getElementById("numeroDos").value;
pnumero=parseInt(pnumero);
snumero=parseInt(snumero);	
resultado=+pnumero*snumero
msj="la multiplicacion es de "+resultado
alert(msj)
}

function dividir()
{
var pnumero;
var snumero;
var resultado;
var msj;
pnumero=document.getElementById("numeroUno").value;
snumero=document.getElementById("numeroDos").value;
pnumero=parseInt(pnumero);
snumero=parseInt(snumero);	
resultado=+pnumero/snumero
msj="la divicion es de "+resultado
alert(msj)
}


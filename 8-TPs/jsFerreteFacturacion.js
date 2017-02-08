/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var numeroUno
var numeroDos
var numeroTres
var resultado
numeroUno=document.getElementById("PrecioUno").value
numeroDos=document.getElementById("PrecioDos").value
numeroTres=document.getElementById("PrecioTres").value
numeroUno=parseInt(numeroUno)
numeroDos=parseInt(numeroDos)
numeroTres=parseInt(numeroTres)
resultado=+numeroUno+numeroDos+numeroTres
alert("La suma es de "+resultado)
}
function Promedio () 
{
var numeroUno
var numeroDos
var numeroTres
var resultado
numeroUno=document.getElementById("PrecioUno").value
numeroDos=document.getElementById("PrecioDos").value
numeroTres=document.getElementById("PrecioTres").value
numeroUno=parseInt(numeroUno)
numeroDos=parseInt(numeroDos)
numeroTres=parseInt(numeroTres)
resultado=+numeroUno+numeroDos+numeroTres
resultado=(resultado)/3
alert("El promedio es de "+resultado)	
}
function PrecioFinal () 
{
	var numeroUno
var numeroDos
var numeroTres
var resultado
numeroUno=document.getElementById("PrecioUno").value
numeroDos=document.getElementById("PrecioDos").value
numeroTres=document.getElementById("PrecioTres").value
numeroUno=parseInt(numeroUno)
numeroDos=parseInt(numeroDos)
numeroTres=parseInt(numeroTres)
resultado=+numeroUno+numeroDos+numeroTres
resultado=(resultado)*1.25
alert("El precio final es de "+resultado)
}
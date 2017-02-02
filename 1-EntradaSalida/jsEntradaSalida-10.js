/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe
	var resultado
	var msj
	var importef
	importe=document.getElementById("importe").value
	importef=parseInt(importe)
	resultado=importef-(importef*0.25)
	document.getElementById("resultado").value=resultado



}

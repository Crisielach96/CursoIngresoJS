/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo
var resultadof
sueldo=document.getElementById("sueldo").value;
sueldo=parseInt(sueldo);
resultadof=(sueldo*0.1)+sueldo;
document.getElementById("resultado").value=resultadof
}

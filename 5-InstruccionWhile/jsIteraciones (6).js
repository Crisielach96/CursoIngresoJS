function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var num
while(contador<5)
{
	contador++
	num=prompt("Ingrese 5 numeros")
	num=parseInt(num)
	acumulador=acumulador+num
}
console.log(acumulador)
console.log(acumulador/contador)
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
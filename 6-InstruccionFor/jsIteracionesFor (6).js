function Mostrar()
{

var numero=prompt("Ingrese un numero y le diremos cuandotos pares hay del 0 al numero ingresado")
var contador=0
for (var i = 1; i <= numero ; i++) 
{	
	numero=parseInt(numero)
	if (i%2==0) 
		{
			contador++
			console.log(i)
		}
}
console.log("Hay "+contador+ " numeros pares")



}//FIN DE LA FUNCIÓN
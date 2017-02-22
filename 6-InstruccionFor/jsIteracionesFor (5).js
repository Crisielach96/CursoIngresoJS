function Mostrar()
{

var numero
var numero=prompt("Ingrese un numero, para terminar ingrese 9")
var final
numero=parseInt(numero)
for (var i = 0;i<=numero; i++) 
{
	console.log(i)
	final=prompt("Ingrese un numero, para terminar ingrese 9")
	if(final==9)
	{
		break
	}
}


}//FIN DE LA FUNCIÓN
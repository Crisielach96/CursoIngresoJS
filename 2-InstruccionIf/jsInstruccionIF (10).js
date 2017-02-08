function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero=parseInt(Math.random()*(11-1))+1
	alert(numero)
	if(numero==10 || numero==9)
		alert("Exelente")
	else
		if(numero>4)
			alert("Aprobo")
		else
			if(numero<=4)
				alert("Vamos, la proxima se puede")

}//FIN DE LA FUNCIÓN
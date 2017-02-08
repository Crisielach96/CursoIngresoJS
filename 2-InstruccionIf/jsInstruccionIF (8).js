function Mostrar()
{
//tomo la edad  

var soltero
var e
e=document.getElementById("edad").value
soltero=document.getElementById("estadoCivil").value
	if(e<18 && soltero!="Soltero"){
		alert("Es muy pequeño para NO ser soltero.")
	}
	else
	{
		if (e>=18 && soltero=="Soltero"){
			alert("Es soltero y no es menor.")
		}
	}


}//FIN DE LA FUNCIÓN
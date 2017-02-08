function Mostrar()
{
//tomo la edad  
if(document.getElementById("edad").value>=18){
	alert("Usted es mayor de edad");
}
else
{
	if(document.getElementById("edad").value>=13){
		alert("Usted es adolecente")
	}
	else
	{
		if(document.getElementById("edad").value<13){
			alert("Usted es un niño")
		}
	}

}
}//FIN DE LA FUNCIÓN
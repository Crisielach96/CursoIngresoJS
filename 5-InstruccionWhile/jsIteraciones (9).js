function Mostrar()
{

	// declarar variables
	var min;
	var max;
	var num;
	var respuesta=true;
	var primera=true;

	while(respuesta)
	{
		num=prompt("Ingrese un numero")
		num=parseInt(num)
		
		if (primera)
		{
			max=num;
			min=num;
			primera=false;
		}
			else
			{
				if (num>max) 
				{
					max=num;
				}
					if (num<min)
					{
		 				min=num;
		 			}
			}		
		respuesta=confirm("¿Quiere seguir?")
	}

document.getElementById('minimo').value=min;
document.getElementById("maximo").value=max;



}//FIN DE LA FUNCIÓN
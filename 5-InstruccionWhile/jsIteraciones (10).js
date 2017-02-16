function Mostrar()
{

	var contador=0;
	var respuesta=true;
	var negativo=0
	var positivo=0
	var acumulador=0
	var acumulador2=0
	var numero
	var contadorPares=0
	var contadorc=0
	//declarar contadores y variables 
	
	while(respuesta)
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero)

		if (numero>0) 
		{
			acumulador+=numero
			positivo++
		}
			else 
			{
			acumulador2+=numero
			negativo++
			
				if (numero==0)
				{
					contadorc++
				}
			}
	if(numero%0)
	{
		contadorPares++
	}
		respuesta=confirm("¿Quiere seguir?")
	}





}//FIN DE LA FUNCIÓN
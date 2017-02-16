function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num ;
	while(respuesta);
	{
		respuesta=prompt("Ingrese los numeros a sumar");
		
		if (respuesta=="si") ;
		{
			break;
		}
		else;
		{
			respuesta=parseInt(respuesta);
			acumulador+=respuesta;
			contador++;
		}
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
function Mostrar()
{

	var contador=0;
	var contador2=0
	var positivo=0;
	var negativo=1;
	var respuesta='si';   
	var acumulador=0 
	var acumulador2=1
	var numero                
while(respuesta)
	{
		numero=prompt("Ingrese los numeros a sumar")		
		if(numero>0)
		{
			numero=parseInt(numero)
			acumulador+=numero
			contador++
			positivo++
		}
		else
		{
			numero=parseInt(numero)
			acumulador2*=numero
			contador++
			negativo++
		}
		
		respuesta=confirm("¿Quiere continuar?")

	}

document.getElementById('suma').value=acumulador;
document.getElementById('producto').value=acumulador2;

}//FIN DE LA FUNCIÓN
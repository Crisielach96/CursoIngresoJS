/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparitas
 	var resultado
 	var resultadoFinal
 	var resultadoFinal2
 	var marca
	marca=document.getElementById("Marca").value
	lamparitas=document.getElementById("Cantidad").value
	lamparitas=parseInt(lamparitas)
 	resultadoFinal=parseInt(resultadoFinal)
 	resultadoFinal2=parseInt(resultadoFinal2)
 	resultado=+lamparitas*35
	if(lamparitas>=6)
	{
	 	resultado=+resultado-(resultado*0.50)
 		resultadoFinal=resultado
 	}
 	
 	
 		if(lamparitas==5 && marca=="ArgentinaLuz")
 		{
			resultado=+resultado-(resultado*0.40)
 			resultadoFinal=resultado
 		}
	 	
			else
			 {
	 			if(lamparitas==5)
	 			{
	 				resultado=+resultado-(resultado*0.30)
	 				resultadoFinal=resultado
	 			}
	 		}

	 	if(lamparitas==4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
	 	{
			resultado=+resultado-(resultado*0.20)
 			resultadoFinal=resultado
 		}
	 		else
			 {
	 			if(lamparitas==4)
	 			{
	 				resultado=+resultado-(resultado*0.25)
 					resultadoFinal=resultado
 				}
 			}
 		if(lamparitas==3 && marca=="ArgentinaLuz")
 		{
			resultado=+resultado-(resultado*0.15)
 			resultadoFinal=resultado
 		}
			else if(lamparitas==3 && marca=="FelipeLamparas")
				{
					resultado=+resultado-(resultado*0.10)
					resultadoFinal=resultado
				}
				else if(lamparitas==3 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
	 					{
	 						resultado=+resultado-(resultado*0.05)
 							resultadoFinal=resultado
 						}
					
				
 		if(resultadoFinal>120)
 		{
 			resultadoFinal=+resultadoFinal*1.10
 		}
 	lamparitas=parseInt(lamparitas)
	resultadoFinal=parseInt(resultadoFinal)
	resultadoFinal2=parseInt(resultadoFinal2)
 	alert("IIBB Usted pago "+resultadoFinal)
	 document.getElementById("precioDescuento").value=resultadoFinal;

}


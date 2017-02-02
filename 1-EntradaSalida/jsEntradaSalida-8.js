/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var snumero;
var resultado;
var msj;
pnumero=document.getElementById("numeroDividendo").value;
snumero=document.getElementById("numeroDivisor").value;
pnumero=parseInt(pnumero);
snumero=parseInt(snumero);
resultado=+pnumero%snumero
msj="El resto es de "+resultado
alert(msj)
}



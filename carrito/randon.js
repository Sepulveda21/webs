function random(){
	const aleatorio = Math.floor(Math.random()*mercancia.length)
	alert("fruver: "+ mercancia[aleatorio].nombre + "\nCodigo: "+mercancia[aleatorio].id);
}
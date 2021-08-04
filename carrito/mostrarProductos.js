
class Productos{


	buscarProductos(e){
				let caja = document.querySelector('.caja');
				let div =document.createElement('div');
				div.setAttribute('id',"padre")
		for(let i=0;i<mercancia.length;i++){{
			if(e.target.value!=""){
			if(!mercancia[i].nombre.indexOf(e.target.value.toLowerCase()))
			{
				div.innerHTML =
					`
					<div class="contentBox centro">
					<div class="imagen">
					<img src="productos/verduras/${mercancia[i].img}"/>
					</div>
					<div class="precio">${mercancia[i].precio} $</div>
					<div class="nombre">${mercancia[i].nombre}</div>
					<div class="comprar"><button data-id="${mercancia[i].id}" class="comprar">comprar</button></div>
					</div>
					`;
					
				
				
			}

			}
	
		}
		caja.appendChild(div);


	}
			if(e.target.value==""){
				// div=caja.querySelector("div")
				console.log()
				while(caja.querySelectorAll("div #padre").length>0){
					caja.removeChild(caja.querySelector("div #padre"))
				}
				this.mostrarProductos();
			}else{
				while(caja.querySelectorAll("div #padre1").length>0){
					caja.removeChild(caja.querySelector("div #padre1"))
				}				
			}

			if(e.target.value != " "){
				
				while(caja.querySelectorAll("div #padre").length>1)	{
					caja.removeChild(caja.querySelector("div #padre"))
				}		
			}
}



	mostrarProductos(){

		let caja = document.querySelector('.caja');
		let div =document.createElement('div');
		div.setAttribute('id',"padre1")
		for(let i=0;i<mercancia.length;i++){
			div.innerHTML +=
			`
			<div class="contentBox">
			<div class="imagen">
			<img src="productos/verduras/${mercancia[i].img}"/>
			</div>
			<div class="precio">${mercancia[i].precio} $</div>
			<div class="nombre">${mercancia[i].nombre}</div>
			<div class="comprart"><button data-id="${mercancia[i].id}" class="comprar">comprar</button></div>
			</div>
			`;
			
		}
		caja.appendChild(div);

	}
	d
}
const p = new Array()
class Carrito{
	comprarProducto(e){
		
		if(e.target.classList.contains("comprar")){
			
			this.showProductsBay(e.target.parentElement.parentNode)
		}
	}


	showProductsBay(productos){

		
		let informacion ={
			imagen:productos.querySelector('.imagen img').src,
			precio:productos.querySelector('.precio').textContent,
			nombre:productos.querySelector('.nombre').textContent,
			cantidad:1,
			idP: productos.querySelector('button').getAttribute('data-id')

		};
		
		p[p.length]=informacion;
		this.showProductsOnBox();
		this.showP(informacion)
		this.guardarProductosLocalStorage(informacion)
		
	}
	showProductsOnBox(){
		
		for(let i=0;i<p.length;i++){
			for(let e=1;e<p.length;e++){
			 	if(i == e){
			 		
			 		continue;
			 	}else{
			 		if(p[i].idP == p[e].idP){
			 			p[i].cantidad+=1;
			 			p.pop(e);

			 		}
			 	}
			}		

		
	}
	
	
}
	showP(informacion){
		let tbody = document.querySelector('table tbody')

		let tr = document.createElement('tr');
		tr.innerHTML=
		`
		<td>${informacion.idP}</td>
		<td><img src="${informacion.imagen}" style="width:50px;height:50px"></td>
		<td>${informacion.nombre}</td>
		<td>${informacion.precio}</td>
		<td>${informacion.cantidad}</td>
		<td><input type="button" class='eliminar-producto' value='X' / data-id='${informacion.idP}'></td>
		`;
		tbody.appendChild(tr);
		this.validarIguales()

	}
	validarIguales(){
		let tbody = document.querySelector('table tbody');
		let tr = tbody.getElementsByTagName('tr');

		for(let i=0; i<tr.length; i++){
			for(let a=1; a<tr.length;a++){
				if(i == a){
					continue;
				}else{
					let tr1 = tr[i].firstElementChild.textContent;
					let tr2 = tr[a].firstElementChild.textContent
					if(tr1 == tr2){
						tr[i].getElementsByTagName('td')[4].textContent =eval(tr[i].getElementsByTagName('td')[4].textContent)+1;
						tr[a].remove();

					}
				}
			}
		}		
	}
	eliminarProductos(e){
		if(e.target.classList.contains("eliminar-producto")){
			if(window.confirm("¿Deseas Eliminar este producto?")){
				let dta =e.target.getAttribute("data-id");
				e.target.parentNode.parentNode.remove()
				p.splice(dta-1,1);
				this.eliminarProductosLocalStorage(dta)
				console.log(p)
			}
		}

	}
	guardarProductosLocalStorage(producto){

		let  productoLS = this.obtenerProductosLocalStorage();
		
		productoLS.push(producto);
		for(let i=0;i<productoLS.length; i++){
			for(let e =1; e<productoLS.length;e++){
				if(i == e){
					continue;
				}else{
				if(productoLS[i].idP == productoLS[e].idP){
					console.log(i+' ----- '+e)
					productoLS[i].cantidad+=1;
					productoLS.splice(e,1);
					break;
				}
				}
			}
		}
		localStorage.setItem('carrito',JSON.stringify(productoLS))		
	}

	obtenerProductosLocalStorage(){
		let productoLS;
		if(localStorage.getItem("carrito") == null){
			productoLS =[];
		}else{
			productoLS =JSON.parse(localStorage.getItem("carrito"))	
		}
		return productoLS;
	}

	mostrarProductosLocalStorage(){
		let productosLS = this.obtenerProductosLocalStorage();
		// p.push(productosLS)
		
		let tbody = document.querySelector('table tbody');
		let tr;
		for(let i=0;i<productosLS.length; i++){
		tr = document.createElement('tr');
		tr.innerHTML=
		`
		<td>${productosLS[i].idP}</td>
		<td><img src="${productosLS[i].imagen}" style="width:50px;height:50px"></td>
		<td>${productosLS[i].nombre}</td>
		<td>${productosLS[i].precio}</td>
		<td>${productosLS[i].cantidad}</td>
		<td><input type="button" class='eliminar-producto' value='X' / data-id='${productosLS[i].idP}'></td>
		`;	
		tbody.appendChild(tr);		
		}
		
	}
	eliminarProductosLocalStorage(dta){
		
		let productoLS = this.obtenerProductosLocalStorage();

		productoLS.forEach((productos, index)=>{
			if(productos.idP === dta){
				productoLS.splice(index,1)	

			}
		})
		return localStorage.setItem('carrito', JSON.stringify(productoLS));
	}

}
	




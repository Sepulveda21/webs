const productos = new Productos();
const carrito  = new Carrito();
const caja = document.querySelector(".caja");
let btn_comprar = document.querySelector(".caja")
let eliminar = document.querySelector('#cajaCompra table')

function cargarProductos(){
	let buscar = document.getElementById('buscar');
	buscar.addEventListener('keyup',(e)=>productos.buscarProductos(e));
	btn_comprar.addEventListener('click',(e)=>carrito.comprarProducto(e))
	eliminar.addEventListener('click',(e)=>carrito.eliminarProductos(e))
	window.addEventListener('load',()=>productos.mostrarProductos())
	window.addEventListener('DOMContentLoaded',(e)=>carrito.mostrarProductosLocalStorage());

}

cargarProductos();



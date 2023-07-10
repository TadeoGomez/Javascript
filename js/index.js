const carrito = []

const coche = [{codigo: 1, nombre: 'Ferrari Spider', precio: 150000},
                {codigo: 2, nombre: 'Lamborghini Gallardo', precio: 135000},
                {codigo: 3, nombre: 'Mercedes AMG', precio: 80000},
                {codigo: 4, nombre: 'Lamborghini Huracán EVO', precio: 200000}]

function buscarCoche(codigo) {
    let resultado = coche.find((coche)=> coche.codigo === parseInt(codigo))
    return resultado
}

function finalizarCompra() {
    const shopping = new Compra(carrito)
    console.log('El valor total de tu compra es de usd$' + shopping.obtenerSubtotal())
}

function comprar() {
    let codigo = prompt('Ingresa el código de tu coche favorito:')
    let cocheElegido = buscarCoche(codigo)
    console.log(cocheElegido)
    if (cocheElegido !== undefined) {
        carrito.push(cocheElegido)
        alert(cocheElegido.nombre + ' se agregó al carrito de compras.')
        let respuesta = confirm('¿Desea comprar otro coche?')
        if (respuesta === true) {
            comprar()
        } else {
            finalizarCompra()
        } 
     } else {
            alert('Error en el código ingresado. Refresca para comenzar nuevamente')
    
    }

}
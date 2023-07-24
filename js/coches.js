const cochesVenta = [
    { id: 1, nombre: 'Aston Martin Valkyrie', precio: 3.000.000 },
    { id: 2, nombre: 'McLaren Solus GT', precio: 3.100.000 },
    { id: 3, nombre: 'Bugatti Chiron Pur Sport', precio: 3.200.000 },
    { id: 4, nombre: 'Lamborghini Sián', precio: 3.300.000 },
    { id: 5, nombre: 'Lamborghini Veneno Roadster', precio: 3.300.000 },
    { id: 6, nombre: 'Bugatti Chiron Super Sport 300+', precio: 3.500.000 },
    { id: 7, nombre: 'GMA T.50S Niki Lauda', precio: 3.600.000 },
    { id: 8, nombre: 'Bugatti Bolide', precio: 4.000.000 },
    { id: 9, nombre: 'Koenigsegg CCXR Trevita', precio: 4.300.000 },
    { id: 10, nombre: 'Pagani Huyara Imola', precio: 5.000.000 },
]

function guardarCarrito() {
    if (carrito.length > 0) {
        localStorage.setItem('MiCarrito', JSON.stringify(carrito))
    }
}

function recuperarCarrito() {
    if (localStorage.getItem('MiCarrito')) {
        return JSON.parse(localStorage.getItem('MiCarrito'))
    } else {
        return []
    }
}

const carrito = recuperarCarrito()
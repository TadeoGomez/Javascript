const tableCoches = document.querySelector('#tablaCoches')
const inputBuscar = document.querySelector('#inputSearch')
const divToats = document.querySelector('div.toast-msg')

function crearFilaHTML(producto) {
    return `<tr>
            <td class="class-table-number">${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button id="${producto.id}" class="button button-outline button-big-emoji">Carrito</button></td>
            </tr>`
}

function activarClick( {
    const botones = document.querySelectorAll('button.button.button-outline')
    botones.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
            let producto = cochesVenta.find((prod)=> prod.id === parseInt(boton.id))
        carrito.push(producto)
        divToats,textContent= "Se agregó un coche al carrito: " + producto.nombre
        guardarCarrito()
        })
    })
})

function cargarCoches(array) {
    tableCoches.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto)=> tableCoches.innerHTML += crearFilaHTML(producto))
        activarClick()
    } else {
        divToats.textContent = "No hay coches para mostrar."
    }
    
}

inputBuscar.addEventListener("search", ()=> {
    if (inputBuscar.value.trim() !== "") {
        let arrayResultante = cochesVenta.filter((producto)=> producto.nombre.toLocaleLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
        cargarCoches(arrayResultante)
    }
})

cargarCoches(cochesVenta)
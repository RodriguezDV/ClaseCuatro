let productoSeleccionado = parseInt(prompt("Qué quiere comprar? \n 1 - Campera: $10.000 \n 2 - Remera: $500 \n 3 - Zapatilla: $12.000 \n 4 - Jean: $5000"));
let campera = 10000
let remera = 500
let zapatilla = 12000
let jean = 5000


let calcularResultado = () => {
    let cuotas = parseInt(prompt("En cuantas cuotas lo quiere?"))
    if(cuotas > 12){
        alert("El máximo de cuotas es de: 12")
        calcularResultado()
    }else{
        let resultado = parseInt(productoSeleccionado / cuotas)
        alert(`$${productoSeleccionado} en ${cuotas} cuotas es: $${resultado}`)
    }
}


let calculoProducto = () => {
    switch (productoSeleccionado){
        case 1: productoSeleccionado = campera
        calcularResultado()
        break;
        case 2: productoSeleccionado = remera
        calcularResultado()
        break;
        case 3: productoSeleccionado = zapatilla
        calcularResultado()
        break;
        case 4: productoSeleccionado = jean
        calcularResultado()
        break;
        default: alert("Producto invalido")
        productoSeleccionado = parseInt(prompt("Qué quiere comprar? \n 1 - Campera \n 2 - Remera \n 3 - Zapatilla \n 4 - Jean"))
        calculoProducto()
        break
    }
}
calculoProducto()





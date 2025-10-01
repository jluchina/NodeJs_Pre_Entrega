import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto } from "./fakestoreAPI.js"

const argumentos = process.argv.slice(2)
console.log(argumentos)


if (argumentos[0] == "GET" && argumentos[1] == "products") {

    console.log("Obtener Todos Los Productos")
    obtenerProductos()

} else if (argumentos[0] == "GET" && argumentos[1].includes ("products/")) {

    console.log("Obtener Un Producto")
    obtenerProducto(argumentos[1])

} else if (argumentos[0] == "POST" && argumentos[1]=="products" && argumentos.length == 5) {
    const producto = {
        title: argumentos[2],
        price: argumentos[3],
        category: argumentos[4]
    }
    console.log("Ingresar Un Producto")
    agregarProducto(producto)

} else if (argumentos[0] == "DELETE" && argumentos[1].includes("products/")) {

    console.log("Eliminar el Producto")
    eliminarProducto(argumentos[1])
    
} else {
    console.log("El comando ingresado es erroneo.")
}




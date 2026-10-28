const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables globales de control
let totalProductos = 0;
let contadorProductos = 0;
let acumuladorPrecios = 0;

// Funcion recursiva para registrar productos
function registrarProducto() {

    // Caso base: todos los productos fueron registrados
    if (contadorProductos === totalProductos) {

        const iva = acumuladorPrecios * 0.13;
        const totalPagar = acumuladorPrecios + iva;

        console.log("\n===== RESUMEN DE LA COMPRA =====");
        console.log("Cantidad de productos: " + totalProductos);
        console.log("Subtotal: $" + acumuladorPrecios.toFixed(2));
        console.log("IVA (13%): $" + iva.toFixed(2));
        console.log("Total a pagar: $" + totalPagar.toFixed(2));
        console.log("Gracias por su compra.");

        rl.close();
        return;
    }

    // Solicitar el precio del producto actual
    rl.question(
        "Ingrese el precio del producto " +
        (contadorProductos + 1) + ": $",
        function (entrada) {

            const precio = Number(entrada);

            // Validar el precio
            if (entrada.trim() === "" ||
                isNaN(precio) ||
                !Number.isFinite(precio) ||
                precio < 0) {

                console.log(
                    "Error: ingrese un precio valido mayor o igual a cero."
                );

                // Volver a solicitar el mismo producto
                registrarProducto();
                return;
            }

            // Acumular el precio
            acumuladorPrecios += precio;
            contadorProductos++;

            // Llamada recursiva para el siguiente producto
            registrarProducto();
        }
    );
}

// Solicitar la cantidad de productos
rl.question("Cuantos productos va a registrar: ", function (entrada) {

    totalProductos = Number(entrada);

    // Validar la cantidad de productos
    if (entrada.trim() === "" ||
        isNaN(totalProductos) ||
        !Number.isInteger(totalProductos) ||
        totalProductos <= 0) {

        console.log(
            "Error: ingrese una cantidad entera de productos mayor que cero."
        );

        rl.close();
        return;
    }

    registrarProducto();
});
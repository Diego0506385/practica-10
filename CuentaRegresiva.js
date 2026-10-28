const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cuentaRegresiva(numero) {
    // Caso base
    if (numero === 1) {
        console.log(numero);
        console.log("¡El tiempo ha terminado!");
        rl.close();
        return;
    }

    console.log(numero);

    // Llamada recursiva
    cuentaRegresiva(numero - 1);
}

rl.question("Ingrese un numero entero positivo: ", function (entrada) {
    const numero = Number(entrada);

    // Validar la entrada
    if (entrada.trim() === "" ||
        isNaN(numero) ||
        !Number.isInteger(numero) ||
        numero <= 0) {

        console.log("Error: debe ingresar un numero entero positivo.");
        rl.close();
        return;
    }

    console.log("Cuenta regresiva:");
    cuentaRegresiva(numero);
});
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumatoria(numero) {
    // Caso base
    if (numero === 1) {
        return 1;
    }

    // Llamada recursiva con retorno
    return numero + sumatoria(numero - 1);
}

rl.question("Ingrese un numero entero positivo N: ", function (entrada) {
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

    const resultado = sumatoria(numero);

    console.log("La sumatoria desde 1 hasta " + numero + " es: " + resultado);

    rl.close();
});
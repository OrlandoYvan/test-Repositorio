function generarFibo(n) {
    var a, b, lista;
    a = 0;
    b = 1;
    lista = [];
    while(a < n) {
        lista.push(a);
        an = a;
        a = b;
        b += an;
    }
    return lista;
}

function obtenerFactorial(n) {
    var fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function mostrarFibonacci() {
    var numero;
    numero = parseInt(prompt("Ingrese un número: "));
    alert("La serie de fibonacci es:\n" + generarFibo(numero));
}

function mostrarFactorial() {
    var numero;
    numero = parseInt(prompt("Ingrese un número: "));
    alert("El factorial de " + numero + ", es: " + obtenerFactorial(numero));
}
document.querySelector("#btnCalcular").addEventListener("click", sumar)

let suma = 0;
let cantidadSumas = 0;

function sumar() {
    let valor = Math.abs(document.querySelector("#txtValor").value) //Math.abs() lo transforma en numero y solo toma el valor absoluto del numero
    suma = suma + valor;
    cantidadSumas++

    if (cantidadSumas == 6) {
        document.querySelector("#msgRetorno").innerHTML = suma
    }
}



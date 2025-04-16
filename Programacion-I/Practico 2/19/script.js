document.querySelector("#btnCalcular").addEventListener("click", multiplos)

let multiplosDe5 = 0;
let mayorA20 = 0;
let ambos = 0;

let cantidadIngresos = 0;

function multiplos() {
    cantidadIngresos++

    let valor = Math.abs(document.querySelector("#txtValor").value) //Math.abs() lo transforma en numero y solo toma el valor absoluto del numero

    let valorString = valor.toString().slice(-1);

    if (valorString == 5 || valorString == 0) multiplosDe5++
    if (valor >= 20) mayorA20++
    if (valor >= 20 && valorString == 5 || valor >= 20 && valorString == 0) ambos++
    
    if (cantidadIngresos == 5) {
        document.querySelector("#msgRetorno").innerHTML = `Ingresaste ${cantidadIngresos} datos de los cuales ${multiplosDe5} son multiplos de 5, ${mayorA20} son mayores a 20 y ${ambos} cumplieron ambas condiciones`
    }
    document.getElementById("txtValor").value = "";
}



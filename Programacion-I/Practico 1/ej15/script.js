document.querySelector("#btnAcumular").addEventListener("click", acumular)
document.querySelector("#btnMostrar").addEventListener("click", mostrar)

let acumuladoTotal = 0;

function acumular(){
    let valor = Number(document.querySelector("#numValor").value)
    acumuladoTotal = acumuladoTotal + valor;
}

function mostrar() {
    document.querySelector("#msgAcumulado").innerHTML = acumuladoTotal;
}
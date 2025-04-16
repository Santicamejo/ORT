document.querySelector("#btnCalcular").addEventListener("click", calcular)

let puntosTotal = 0;

function calcular(){
    let victorias = Number(document.querySelector("#numVictorias").value)
    let empates = Number(document.querySelector("#numEmpates").value)
    let derrotas = Number(document.querySelector("#numDerrotas").value)

    document.querySelector("#msgResultado").innerHTML = puntosTotal = (victorias * 3)+(empates*1)
}

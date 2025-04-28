document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

let resultado = 1;

function ejecutar() {
    document.querySelector("#msgCounter").innerHTML = ""
    let valor = Number(document.querySelector("#txtValor").value)
    let valor2 = Number(document.querySelector("#txtValor2").value)
    
    for (let i = valor; i <= valor2; i++) {
        resultado = resultado * i
    }
    document.querySelector("#msgCounter").innerHTML = resultado
}
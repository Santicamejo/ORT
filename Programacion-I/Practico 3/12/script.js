document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

let resultado = 1;

function ejecutar() {
    document.querySelector("#msgCounter").innerHTML = ""
    let valor = Number(document.querySelector("#txtValor").value)
    
    for (let i = 1; i <= valor; i++) {
        resultado = resultado * i
    }
    document.querySelector("#msgCounter").innerHTML = resultado
}
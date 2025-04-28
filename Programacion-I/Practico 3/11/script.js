document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

let resultado = 0;

function ejecutar() {
    document.querySelector("#msgCounter").innerHTML = ""
    let valor = Number(document.querySelector("#txtValor").value)
    let valor2 = Number(document.querySelector("#txtValor2").value)
    let valor3 = Number(document.querySelector("#txtValor3").value)
    
    let min
    let max

    if(valor > valor2) {
        max = valor 
        min = valor2
    }
    if(valor < valor2) {
        max = valor2 
        min = valor
    }

    for (let i = min; i <= max; i++) {
        if (i%valor3 == 0) {
            document.querySelector("#msgCounter").innerHTML += i + "<br>"
        }
    }
}
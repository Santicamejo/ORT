document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

function ejecutar() {
    document.querySelector("#msgCounter").innerHTML = ""
    let valor = Number(document.querySelector("#txtValor").value)
    let valor2 = Number(document.querySelector("#txtValor2").value)

    let min; 
    let max;
    
    if (valor > valor2) {
        max = valor
        min = valor2
    }else{
        max = valor2
        min = valor
    }

    for (let i = min; i <= max ; i++) {
        document.querySelector("#msgCounter").innerHTML += i + "<br>"
    }
}
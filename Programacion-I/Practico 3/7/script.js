document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

function ejecutar() {
    document.querySelector("#msgCounter").innerHTML = ""
    let valor = Number(document.querySelector("#txtValor").value)
    for (let i = 1; i <= valor ; i++) {
        document.querySelector("#msgCounter").innerHTML += "-"
    }
}
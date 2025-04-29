document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

let cantidad = 0;

function ejecutar() {
    let valor = Number(document.querySelector("#txtValor").value)
    while (valor >= 1) {
        valor = valor / 10
        cantidad ++
    }
    document.querySelector("#msgDig").innerHTML = "el numero tiene " + cantidad + " digitos"
}   
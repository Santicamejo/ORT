document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

let respuesta = 0;

function ejecutar() {
    document.querySelector("#msgCounter").innerHTML = ""
    let valor1 = Number(document.querySelector("#txtValor").value)
    let valor2 = Number(document.querySelector("#txtValor2").value)
    
    for (let i = valor1; i <= valor2; i++) {
        if (i % 4 == 0 && i % 6 == 0 && respuesta == 0) {
            respuesta = i
            document.querySelector("#msgCounter").innerHTML += respuesta + " "
            // break
        }
    }

}
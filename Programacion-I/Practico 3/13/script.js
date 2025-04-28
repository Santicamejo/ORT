document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

let resultado = 0;

function ejecutar() {
    document.querySelector("#msgCounter").innerHTML = ""
    let alto = Number(document.querySelector("#txtValor").value)
    let ancho = Number(document.querySelector("#txtValor2").value)
    
    for (let i = 1; i <= alto; i++) {
        document.querySelector("#msgCounter").innerHTML += "<br>"
        for (let i = 1; i <= ancho; i++) {
            document.querySelector("#msgCounter").innerHTML += "0"
        }
    }

}
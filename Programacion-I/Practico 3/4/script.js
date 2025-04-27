document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

function ejecutar() {
    for (let i = 20; i >= -30 ; i = i-1) {
        document.querySelector("#msgCounter").innerHTML += i + "<br>"
    }
}
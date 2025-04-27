document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

function ejecutar() {
    for (let i = 0; i <= 1000 ; i++) {
        document.querySelector("#msgCounter").innerHTML += i + "<br>"
    }
}
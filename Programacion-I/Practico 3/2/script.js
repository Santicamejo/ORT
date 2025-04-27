document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

function ejecutar() {
    for (let i = -100; i <= 10 ; i++) {
        document.querySelector("#msgCounter").innerHTML += i + "<br>"
    }
}
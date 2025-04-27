document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

function ejecutar() {
    for (let i = 40; i >= 10 ; i = i-1) {
        document.querySelector("#msgCounter").innerHTML += i + "<br>"
    }
}
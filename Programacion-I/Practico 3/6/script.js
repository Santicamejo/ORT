document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

function ejecutar() {
    for (let i = -33; i <= 230 ; i++) {
        if (i % 4 == 0) document.querySelector("#msgCounter").innerHTML += i + "<br>"
    }
}
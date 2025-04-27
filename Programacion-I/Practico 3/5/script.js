document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

function ejecutar() {
    for (let i = 1; i <= 450 ; i++) {
        if (i % 5 == 0) document.querySelector("#msgCounter").innerHTML += i + "<br>"
    }
}
document.querySelector("#createRutina").addEventListener("click", generarRutina)

function generarRutina() {
    let dia = document.querySelector("#txtDia").value.touppercase()
    let temperatura = Number(document.querySelector("#txtTemperatura").value)

    if (dia == "DOMINGO") {
        document.querySelector("#mgsRutina").innerHTML = "Hoy no trabajas bobis"
    }
}
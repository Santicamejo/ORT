document.querySelector("#createRutina").addEventListener("click", generarRutina)

function generarRutina() {
    let dia = document.querySelector("#txtDia").value.toUpperCase()
    let temperatura = Number(document.querySelector("#txtTemperatura").value)
    
    document.querySelector("#msgRutina").innerHTML = "Levantarse,"

    if (temperatura <= 10) document.querySelector("#msgRutina").innerHTML += " abrigarse mucho"
    if (temperatura >= 20) document.querySelector("#msgRutina").innerHTML += " ponerse ropa comoda"
    if (temperatura > 10 && temperatura < 20) document.querySelector("#msgRutina").innerHTML += " ponerse ropa moderada"

    if (dia == "LUNES" || dia == "MARTES" || dia == "MIERCOLES" || dia == "JUEVES" || dia == "VIERNES") {
        document.querySelector("#msgRutina").innerHTML += " e ir a Trabajar"
    }else if(dia == "DOMINGO"){
        document.querySelector("#msgRutina").innerHTML += " y quedarse en casa"
    }
    
}
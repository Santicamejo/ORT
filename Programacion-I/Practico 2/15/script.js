document.querySelector("#btnBuscar").addEventListener("click", buscar)

function buscar(){
    let inicial = document.querySelector("#txtInicial").value.toUpperCase()

    switch (inicial) {
        case "A":
            document.querySelector("#msgMostrarDto").innerHTML = "Canelones"

            break;
        case "B":
            document.querySelector("#msgMostrarDto").innerHTML = "Maldonado"

            break;
        case "C":
            document.querySelector("#msgMostrarDto").innerHTML = "Rocha"

            break;
        case "D":
            document.querySelector("#msgMostrarDto").innerHTML = "Treinta y Tres"
    
            break;
            
        default:
            document.querySelector("#msgMostrarDto").innerHTML = "Las unicas letras validas son A, B, C, D"
            break;
    }
}
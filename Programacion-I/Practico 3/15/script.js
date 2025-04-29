document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

let resultado = 0;

function ejecutar() {
    let valor = Number(document.querySelector("#txtValor").value)

    if (valor >= 2000) {
        while (valor > 100) {
            valor = valor / 20
        }
        document.querySelector("#msgResultado").innerHTML = valor
    }else{
        document.querySelector("#msgResultado").innerHTML = "El valor es menor a 2000, volver a ingresar"
    }
}
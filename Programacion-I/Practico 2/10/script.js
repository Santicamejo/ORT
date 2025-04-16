document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular() {
    let valorUno = Number(document.querySelector("#txtValorUno").value)
    let valorDos = Number(document.querySelector("#txtValorDos").value)

    if (valorUno > valorDos) {
        document.querySelector("#msgResultado").innerHTML = valorDos - valorUno
    }else{
        document.querySelector("#msgResultado").innerHTML = valorUno - valorDos
    }
}

document.querySelector("#btnEnviar").addEventListener("click", calcular)

function calcular() {
    let valor = document.querySelector("#txtValor").value.toUpperCase()
    if (valor == "A" || valor == "E" || valor == "I" || valor == "O" || valor == "U") {
        alert("Es vocal")
    }else{
        alert("No es vocal")
    }
}
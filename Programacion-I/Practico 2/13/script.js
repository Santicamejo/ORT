document.querySelector("#btnEnviar").addEventListener("click", calcular)

function calcular() {
    let valor = Number(document.querySelector("#txtValor").value)
    let valor2 = Number(document.querySelector("#txtValor2").value)
    console.log(valor);
    console.log(valor2);
    
    if (valor2 % valor == 0) {
        alert("Es multiplo")
    }else{
        alert("No es")
    }
}
document.querySelector("#btnEjecutar").addEventListener("click", ejecutar)

let resultado = 0;

function ejecutar() {
    document.querySelector("#msgCounter").innerHTML = ""
    let valor = Number(document.querySelector("#txtValor").value)
    let valor2 = Number(document.querySelector("#txtValor2").value)

    console.log(valor);
    console.log(valor2);
    
    for (let i = 1; i <= valor2; i++) {
        resultado = resultado + valor
    }
    document.querySelector("#msgCounter").innerHTML = resultado
}
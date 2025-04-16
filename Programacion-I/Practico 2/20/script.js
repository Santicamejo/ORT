document.querySelector("#btnCalcular").addEventListener("click", calcularReceta)

function calcularReceta() {
    let azucar = Math.abs(document.querySelector("#txtAzucar").value) / 1 //Math.abs() lo transforma en numero y solo toma el valor absoluto del numero
    let harina = Math.round(Math.abs(document.querySelector("#txtHarina").value) / 100) //Math.round() redondea al numero mas cercano
    let aceite = Math.abs(document.querySelector("#txtAceite").value) / 1
    let agua = Math.abs(document.querySelector("#txtAgua").value) / 1
    
    let valor = 1000;

    if (azucar < valor) valor = azucar;
    if (harina < valor) valor = harina;
    if (aceite < valor) valor = aceite;
    if (agua < valor) valor = agua;

    document.querySelector("#msgRetorno").innerHTML = `Vas a poder hacer ${valor} recetas`
}



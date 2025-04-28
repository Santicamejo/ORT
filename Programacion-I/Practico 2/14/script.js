document.querySelector("#btnConsultar").addEventListener("click", calcularDestino)

function calcularDestino() {
    let millas = Number(document.querySelector("#txtCantidadMillas").value)
    let Plus = document.querySelector("#slcPlus").value

    if(Plus == "s"){
        millas = millas * 2
    }
    if (millas >= 15000) document.querySelector("#msgDestino").innerHTML = "el destino mas lejano es America del Sur"
    if (millas >= 30000) document.querySelector("#msgDestino").innerHTML = "el destino mas lejano es America del Norte"
    if (millas >= 60000) document.querySelector("#msgDestino").innerHTML = "el destino mas lejano es Europa"
}
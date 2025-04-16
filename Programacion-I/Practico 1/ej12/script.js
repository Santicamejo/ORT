document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular() {
    let masa = Number(document.querySelector("#numMasa").value)
    let altura = Number(document.querySelector("#numAltura").value)

    document.querySelector("#msgPesoCorrecto").innerHTML = masa/(altura**2)
    
}
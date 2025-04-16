document.querySelector("#btnCalcular").addEventListener("click", calcular)

let puntosTotal = 0;

function calcular(){
    let chirridos = Number(document.querySelector("#txtChirridos").value)

    let tempF = 50 + ((chirridos - 40)/4)
    let tempC = Math.trunc((5/9)*(tempF -32))

    console.log(tempF);
    
    document.querySelector("#msgTemperatura").innerHTML = tempC + "°C"
}
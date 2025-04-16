document.querySelector("#btnCalcular").addEventListener("click", calcularFinanciacion)

function calcularFinanciacion() {
    let ingresos = Number(document.querySelector("#txtIngresos").value)
    let valor = Number(document.querySelector("#txtValorPropiedad").value)
    
    if (ingresos < 20000) {
        let pagoInicial = valor*0.15
        let cuotaXmes = ((valor - pagoInicial) / 84).toFixed(2)
    
    document.querySelector("#msgRetorno").innerHTML = `Usted debe abonar el pago inicial que es de ${pagoInicial}$ y obtendra una financiacion de ${cuotaXmes}$ por 84 meses`
}

    if (ingresos >= 20000) {
        let pagoInicial = valor*0.3
        let cuotaXmesMas = ((valor - pagoInicial) / 12).toFixed(2)


    document.querySelector("#msgRetorno").innerHTML = `Usted debe abonar el pago inicial que es de ${pagoInicial} y obtendra una financiacion de ${cuotaXmesMas} por 12 meses`
}

}



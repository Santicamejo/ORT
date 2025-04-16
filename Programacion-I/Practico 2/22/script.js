document.querySelector("#btnCalcular").addEventListener("click", calcularFinanciacion)

function calcularFinanciacion() {
    let costo = Number(document.querySelector("#txtProducto").value)
    let tarjeta = document.querySelector("#sltSiNo").value
    
    console.log(tarjeta);
    

    if (costo <= 10000 && tarjeta == "si") {
        let descuento = costo*0.04
        let valorFinal = costo - descuento
    
    document.querySelector("#msgRetorno").innerHTML = `Usted tiene un descuento de 4% ${descuento}$ y el costo del producto queda en ${valorFinal}$`
}else{
    document.querySelector("#msgRetorno").innerHTML = `Usted debe abonar ${costo}$`
}
}



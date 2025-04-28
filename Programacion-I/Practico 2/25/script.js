document.querySelector("#btnCompra").addEventListener("click", Comprar)
document.querySelector("#btnStock").addEventListener("click", guardarStock)

    let stock;
    let mayorCompra = 0
    let mejorCliente 


function guardarStock() {
    stock = Number(document.querySelector("#txtStock").value)
    console.log(stock);
    document.querySelector("#divStock").style.display = "none"
    document.querySelector("#divPedidos").style.display = "block"
}

function Comprar() {
        let nombre = document.querySelector("#txtName").value
        let pedido = Number(document.querySelector("#txtPedido").value)
        
        if (pedido <= stock) {
            stock = stock - pedido;
            if (pedido > mayorCompra) mejorCliente = nombre 
            if (pedido > mayorCompra) mayorCompra = pedido 
            document.querySelector("#msgMensaje").innerHTML = "Compra realizada!"
            document.querySelector("#msgMensaje").style.color = "green"
        }else{
            document.querySelector("#msgMensaje").innerHTML = "Compra no realizada:("
            document.querySelector("#msgMensaje").style.color = "red"
        }
        if (stock < 1) {
            document.querySelector("#msgResultados").innerHTML = `El mejor cliente fue ${mejorCliente} y la mejor compra fue ${mayorCompra}` 
            document.querySelector("#btnCompra").disabled = true
        }
}

document.querySelector("#NumPos").addEventListener("click", NumPos)

function NumPos() {
    let num = Number(document.querySelector("#txtValor").value)
    if(num >= 0){
        alert("El numero es positivo")
    }else{
        alert("el numero es negativo")
    }
}
document.querySelector("#NumPos").addEventListener("click", NumPos)

function NumPos() {
    let num = Number(document.querySelector("#txtValor").value)
    if(num > 10){
        alert("El numero es Mayor a 10")
    }else{
        alert("El numero es Menor a 10")
    }
}
document.querySelector("#NumPos").addEventListener("click", NumPos)

function NumPos() {
    let num = Number(document.querySelector("#txtValor").value)
    if(num > 10 && num < 20){
        alert("Es mayor a 10 y menor a 20")
    }else{
        alert("No cumple")
    }
}   
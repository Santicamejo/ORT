document.querySelector("#NumPos").addEventListener("click", NumPos)

function NumPos() {
    let num = Number(document.querySelector("#txtValor").value)
    if(num >= -20 && num <= 20){
        alert("NO CUMPLE")
    }else{
        alert ("CUMPLE")
}
}   
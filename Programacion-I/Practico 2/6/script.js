document.querySelector("#NumPos").addEventListener("click", NumPos)

function NumPos() {
    let num = Number(document.querySelector("#txtValor").value)
    if(num % 7 == 0 && num % 3 == 0){
        alert("Cumple")
    }else{
        alert("No cumple")
    }
}   
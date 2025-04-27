document.querySelector("#NumPos").addEventListener("click", NumPos)

function NumPos() {
    let num = Number(document.querySelector("#txtValor").value)
    if(num < 30 && num > 10){
        alert("Entre diez y treinta")
    }else{
        if(num > 30)alert("Es mayor que treinta")
        if(num < 10)alert("Menor que 10")
    }
}   
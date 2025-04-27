document.querySelector("#NumPos").addEventListener("click", NumPos)

function NumPos() {
    let num = Number(document.querySelector("#txtValor").value)
    if(num > 20){
        alert("es mayor que 20")
    }else{
        alert("es menor o igual a 20")
    }
}   
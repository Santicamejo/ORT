document.querySelector("#NumPos").addEventListener("click", NumPos)

function NumPos() {
    let num = Number(document.querySelector("#txtValor").value)
    if(num < 0){
        alert(num * -1)
    }else{
        alert(num)
    }
}   
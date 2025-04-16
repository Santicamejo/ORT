document.querySelector('#btnCalcular').addEventListener('click', calcularArea);

function calcularArea() {
    let ladoCuadrado = Number(document.querySelector('#numArea').value);

    document.querySelector('#msgArea').innerHTML = ladoCuadrado**2 + " cm²";
}
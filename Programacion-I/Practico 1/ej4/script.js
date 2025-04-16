document.querySelector('#btnEnviar').addEventListener('click', sumar);

function sumar() {
    let valor1 = Number(document.querySelector('#numValor1').value);
    let valor2 = Number(document.querySelector('#numValor2').value);

    resultado = valor1 + valor2;

    document.querySelector('#msgSuma').innerHTML = resultado;
}
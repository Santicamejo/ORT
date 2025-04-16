document.querySelector('#btnCalcular').addEventListener('click', sumaDosElementos);

function sumaDosElementos() {
    let value1 = Number(document.querySelector('#numValor1').value);
    let value2 = Number(document.querySelector('#numValor2').value);

    document.querySelector('#msgResto').innerHTML = value1 + value2;
};  
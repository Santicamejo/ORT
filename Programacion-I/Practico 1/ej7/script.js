document.querySelector('#btnCalcular').addEventListener('click', dividir);

function dividir() {
    let valor1 = Number(document.querySelector('#numValor1').value);
    let valor2 = Number(document.querySelector('#numValor2').value);
    
    document.querySelector('#msgArea').innerHTML = valor1%valor2;
};




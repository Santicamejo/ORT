document.querySelector('#btnCalcular').addEventListener('click', calcularCotizacion);

function calcularCotizacion() {
    let pesos = Number(document.querySelector('#numPesos').value);
    let valorDolar = 42.16

    document.querySelector('#msgArea').innerHTML = (pesos/valorDolar).toFixed(2);
};




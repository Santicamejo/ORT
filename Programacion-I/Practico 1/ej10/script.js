document.querySelector('#btnCalcular').addEventListener('click', sumarRecarga);

function sumarRecarga() {
    let importe = Number(document.querySelector('#numImporte').value);
    let recarga = Number(document.querySelector('#numRecarga').value);

    document.querySelector('#msgCalculo').innerHTML = importe+(importe*recarga/100);
};  
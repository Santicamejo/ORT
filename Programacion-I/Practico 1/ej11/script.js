document.querySelector('#btnCalcular').addEventListener('click', sumarRecarga);

function sumarRecarga() {
    let importe = Number(document.querySelector('#numImporte').value);

    document.querySelector('#msgIVA').innerHTML = "IVA: " + (importe*22/100) + "$";
    document.querySelector('#msgCalculo').innerHTML ="Total: " + (importe + (importe*22/100)) + " $";
};  
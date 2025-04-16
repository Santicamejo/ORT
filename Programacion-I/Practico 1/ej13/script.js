document.querySelector("#btnSumar").addEventListener("click", sumar)

let clicks = 0;

function sumar() {
    clicks ++;
    document.querySelector("#msgSuma").innerHTML = clicks
}
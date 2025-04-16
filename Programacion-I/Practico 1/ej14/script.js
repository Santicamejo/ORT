document.querySelector("#btnIncrementar").addEventListener("click", incrementar)

let click = 0;

function incrementar() {
    click += 3;

    document.querySelector("#msgIncremento").innerHTML = click
}
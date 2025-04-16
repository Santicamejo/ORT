document.querySelector("#btnEnviar").addEventListener("click", formato)

function formato() {
    let name = document.querySelector("#txtNombre").value
    let apellido = document.querySelector("#txtApellido").value

    document.querySelector("#msgFormat").innerHTML = apellido +", "+ name
}
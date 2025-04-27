document.querySelector("#btnCargar").addEventListener("click", mostrarDatos)

    let notas = 0;
    let notaMin = 1000;
    let notaMax = 0;
    let prom;
    let cantidadNotas;
    let perdieron = 0;
    let salvaron = 0;
    let buenaNota = 0;

function mostrarDatos() {
    let nota = Number(document.querySelector("#txtNota").value)

    notas = notas + nota
    if(nota < notaMin) notaMin = nota
    if(nota > notaMax) notaMax = nota

    if(nota<70) perdieron++
    if(nota>70) salvaron++
    if(nota>90) buenaNota++

    cantidadNotas++

    prom = (notas/cantidadNotas)
    document.querySelector("#msgNotas").innerHTML = `Perdieron ${perdieron} alumnos, salvaron ${salvaron} alumnos y de esos ${buenaNota} sacaron nota buena`
    document.querySelector("#msgNotasResumen").innerHTML = `El promedio de notas es ${perdieron} con una nota maxima de ${notaMax} y una nota minima de ${notaMin}`
}
document.querySelector("#btnCargar").addEventListener("click", mostrarDatos)

    let salarios = 0;
    let salarioMin = 1000000;
    let totalEmpleados = 0;

function mostrarDatos() {
    let salario = Number(document.querySelector("#txtSalario").value)

    salarios = salarios + salario
    if(salario < salarioMin) salarioMin = salario

    totalEmpleados++

    document.querySelector("#msgResultados").innerHTML = `El total de sueldos a pagar este mes es de ${totalEmpleados} con un valor de ${salarios}$ donde el sueldo mas bajo es ${salarioMin}$z`
}
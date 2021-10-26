let convertirCmAPulgadas = pulgadas => pulgadas*2.54;

console.log(convertirCmAPulgadas(2));

let agregarHttp = string => "http://www."+string+".com"

console.log(agregarHttp("pepito"));

let agregarAdmiracion = string => string+"!"

console.log(agregarAdmiracion("pepito"));

let calcularEdadPerros = edad => edad*7;

console.log(calcularEdadPerros(2));


let calcularHoraDeTrabajo = sueldoMensual => sueldoMensual/40;

console.log((calcularHoraDeTrabajo(5000)));

let calcularImc = (metros,peso) => peso/(metros*metros)

console.log(calcularImc(1,76, 80));




//Array de nombres
const nombres = ['Martin','Homero','Cosme','Steven','Adam'];

function buscarNombre(nombre, funcion){

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] == nombre){
            return funcion(nombre);
        }       
        return funcion("")
    }
}

let mostrarResultado = (nombre) => {

    if (!nombre){
        return "Nombre no encontrado"
    } else {
        return "El nombre " + nombre + " fue encontrado"
    }
}

//Ejemplo de invocacion
console.log(buscarNombre("Martin", mostrarResultado)); //El nombre Martin fue encontrado 




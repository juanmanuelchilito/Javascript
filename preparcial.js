const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/

inmobiliaria = {

// A

 departamentos: departamentos,
 
// B

    listarDepartamentos: function(arraydeptos){

        for(let i=0; i <arraydeptos.length; i++){
            
            let disponible = arraydeptos[i].disponible? "Disponible" : "Alquilado";
            let mascotasAceptadas = arraydeptos[i].aceptaMascotas? "acepta mascotas" : "No acepta mascotas"
                      
            console.log( "id: " + arraydeptos[i].id + " Precio $" + arraydeptos[i].precioAlquiler 
            + " está " + disponible + ", máximo " + arraydeptos[i].cantidadPersonas + " Personas, " 
            + mascotasAceptadas + ", propetarios: " + arraydeptos[i].propietarios );
        }    
        return ""
    },

// C

    departamentosDisponibles : function (){

        let deptosDisponibles = [];

        for(let i=0; i <this.departamentos.length; i++){

            if (this.departamentos[i].disponible){
                deptosDisponibles.push(this.departamentos[i])
            }
        }
        return deptosDisponibles;
    },

// D

    buscarPorId : function(idDepto){

        for(let i=0; i <this.departamentos.length; i++){

        if (idDepto>0 && Number.isInteger(idDepto)) {
            if (this.departamentos[i].id==idDepto){
                return this.departamentos[i]
            }
        } else {
            return "El ID debe ser un entero mayor a cero"
            }
        }      
     
    },

// E

    buscarPorPrecio : function (precioDepto){

        let arrayResultado = [];
        let deptosDisponibles = this.departamentosDisponibles()

            for (let i = 0; i < deptosDisponibles.length; i++) {
                
                if (deptosDisponibles[i].precioAlquiler<=precioDepto) {

                arrayResultado.push(deptosDisponibles[i]);                
                }
            }
    return arrayResultado;
    },

// F

    precioConImpuesto : function (impuestoEnPorcentaje){

        let ArrayDeptosConImpuesto = []
        impuestoEnDecimal = impuestoEnPorcentaje/100 + 1;

        for(let i=0; i <this.departamentos.length; i++){
            this.departamentos[i].precioAlquiler = this.departamentos[i].precioAlquiler *impuestoEnDecimal;
            ArrayDeptosConImpuesto.push(this.departamentos[i]);
        }
        return ArrayDeptosConImpuesto;
    },

// G

    simplificarPropietarios : function () {
        
        let arrayDeptos = this.departamentos;
        for(let i=0; i <arrayDeptos.length; i++){

        let arrayTextoPropietarios = arrayDeptos[i].propietarios.split(":");
        arrayDeptos[i].propietarios = "Prop.:" + arrayTextoPropietarios [1];        
        }
    return arrayDeptos
    },

    alquilar : function (idDepto){

        let idDeptoAlquilar = this.buscarPorId(idDepto);

        if (idDeptoAlquilar.disponible){

            idDeptoAlquilar.disponible = false;

            return `Departamento con id:${idDepto} está alquilado`

        } else {
            return "Ingrese otro Id, No se puede alquilar un Departamento ya alquilado"
        }
        
      
    }

}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
inmobiliaria.listarDepartamentos(departamentos)

console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());
console.log(o);

console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
console.log(inmobiliaria.buscarPorId(2));
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
console.log(inmobiliaria.buscarPorPrecio(5000)); 
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí

console.log(o);
console.log(inmobiliaria.precioConImpuesto(50));
console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
console.log(inmobiliaria.simplificarPropietarios());


console.log(o);

console.log(v, oo + " E. Alquilar");
// Ejecución aquí
console.log(inmobiliaria.alquilar(10));

console.log(o);










/*
let inmobiliaria = {

    departamentos : arrayDepartmentos,

    listarDepartamentos: function(arrayDptos) {
        for (let i = 0; i < arrayDptos.length; i++) {
           let dpto = arrayDptos[i];
           let disponible = dpto.disponible==true? "Esta disponible" : "Esta alquilado";
           let dptoString = "id: " + dpto.id + ", precio $" + dpto.precioAlquiler + " " + disponible;

            console.log(dptoString);
        }
    }


}

inmobiliaria.listarDepartamentos(arrayDepartamentos)*/
let arrayObjetos = [{nombre:"Lean",

                      edad: 27},
                    {
                      nombre:"Eze",

                      edad: 49

                    }

]

function propiedadUnica (arrayObjetos, propiedad){
    
    
    if (propiedad =="nombre"){
        let arrayResult = [];
        let ObjetoNombre={};
      
        for(let i=0; i<arrayObjetos.length; i++)
        {
            ObjetoNombre = {

                [propiedad] : arrayObjetos[i].nombre     
            }
            arrayResult.push (ObjetoNombre)    
        }
        return arrayResult;    

    } else if (propiedad == "edad"){
        let arrayResult = [];
        let ObjetoEdad={};
      
        for(let i=0; i<arrayObjetos.length; i++)
            {
                ObjetoEdad = {

                    [propiedad] : arrayObjetos[i].edad    
                }
                
            arrayResult.push (ObjetoEdad)
    
        }
        return arrayResult;
    } 
    
}

console.log(propiedadUnica(arrayObjetos,"nombre"));
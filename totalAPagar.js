


const tarifaPorLitros = (litrosConsumidos) =>{
    if (litrosConsumidos<0){
        return 'Error: litros menores a cero';
    }
    else if (litrosConsumidos<25){
        return 50;
    }else {
        return 25;
    }
}

const totalApagar = (vehiculos,litrosConsumidos) =>{

   if (litrosConsumidos>0){   
        if (vehiculos=='coche'){
            return (86 + (tarifaPorLitros(litrosConsumidos))); 
        }
        else if (vehiculos=='moto'){
            return (70 + (tarifaPorLitros(litrosConsumidos))); 
        }
        else if (vehiculos=='autobús'){
            return (55 + (tarifaPorLitros(litrosConsumidos))); 
        }
    }
      

    else{
        return 'Error litros menor a cero'
    }


}

console.log(totalApagar('coche',-12));
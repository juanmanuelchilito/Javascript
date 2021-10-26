const precioBase = (base) => {
 
    let precioBase;
     
    if (base=='pollo' ){
        precioBase=150;
        return precioBase;
    }
    else if (base=='carne'){
        precioBase=200;
        return precioBase;
    }
    else if (base=='veggie'){
        precioBase=100;
        return precioBase;
    }
    return precioBase;
}

const precioPan = (pan) => {
 
    let precioPan;
     
    if (pan=='Blanco con oregano y parmesano' ){
        precioPan=50;
        return precioPan;
    }
    else if (pan=='Negro con avena' ){
        precioPan=60;
        return precioPan;
    }
    else if (pan=='Sin gluten' ){
        precioPan=75;
        return precioPan;
    }
    return precioPan;
}


const armaTuSandwich = (base,pan,queso,tomate,lechuga,cebolla, mayonesa, mostaza) => {
    

return precioBase(base)+precioPan(pan)+(queso==true?20:0)+(tomate==true?15:0)+(lechuga==true?10:0)+(cebolla==true?15:0)+(mayonesa==true?5:0)+(mostaza==true?5:0);

}

console.log(armaTuSandwich('pollo','Sin gluten',true, true,true,true,true,true));


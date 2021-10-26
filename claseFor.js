let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

let peliculasAnimadas = ["toy story", "finding Nemo", "Kung-fu panda", "wally", "fortnite"]

function convertirAMayusculas(array){
    let peliculasMayuscula = []
    for (let i=0;i < array.length; i++){
        peliculasMayuscula.push(array[i].toUpperCase())
    }
    return peliculasMayuscula;
}
console.log(convertirAMayusculas(peliculas));
console.log(convertirAMayusculas(peliculasAnimadas));



function pasajeDeElementos(array1, array2){    
    while (array2.length>0){
        array1.push(array2.pop().toUpperCase())
    } 
    return array1;
}

console.log(pasajeDeElementos(convertirAMayusculas(peliculas),peliculasAnimadas));

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararScores (score1,score2){    
    let valor=true;
    for(let i=0;i<score1.length;i++){     
        valor = score1[i]==score2[i] && valor;        
    }
    return valor;           
}

console.log(compararScores(asiaScores,euroScores));



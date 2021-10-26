let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

let peliculasAnimadas = ["toy story", "finding Nemo", "Kung-fu panda", "wally", "fortnite"]

function agregarDosArrays(a,b){

    return a.push(b[0],b[1],b[2],b[3],b[4])
}

//Agregar elementos de dos arrays

agregarDosArrays(peliculas,peliculasAnimadas)


//Array a Mayusculas


function peliculasMayuscula(peliculas){
    return peliculas.map(pelicula => pelicula.toUpperCase());
}


//Eliminar ultimo elemento de un Array y guardarlo

let elementosEliminados = peliculas.pop()

console.log(peliculasMayuscula(peliculas));


//comparar dos Arrays

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



// Imprimir inverso de un array

function imprimirInverso(a){
    return a.reverse()
}
console.log(imprimirInverso(asiaScores));



//Sumar Elementos de un Array

let a = [1,3,5]

function sumArray (a){
    return a[0]+a[1]+a[2]
}

console.log(sumArray(a));




//Unir elementos de un array

let varForJoin = ["h","o","l","a"]

function unir (a) {
    return a.join('');
}

console.log(unir(varForJoin));
participanteA = [5,8,4,9,5]
participanteB = [8,7,8,6,18]
participanteC = [7,5,10,8,3]

const puntajePromedio = (score) =>{
    let suma=0
    for (let i=0; i<score.length ; i++){
        suma+=score[i]
    }
    return suma/score.length;
}

console.log(puntajePromedio(participanteA));

const puntajeMayor = (score) =>{
    let puntaje 
    for (let i=0; i<score.length ; i++){
        
        if (score[i+1]>score[i]){
            puntaje = score[i+1]
        }
    }
    return puntaje;
}

console.log(puntajeMayor(participanteC));

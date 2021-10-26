const alicia = [23,69,82]
const bob = [12,68,43]

function encontrarGanador (a,b){
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;

    for (let i=0 ; i<3 ;i++ ){
        if (a[i]>b[i]){
            console.log(`Ronda ${i+1}`);
            puntosPrimerParticipante += 1;
            console.log("Votos Primer Participante: "+ a[i] + " | " +"Puntos Primer Participante: " + puntosPrimerParticipante);
            console.log("");
            console.log("Votos Segundo Participante: "+ b[i] + " | " +"Puntos Segundo Participante: " + puntosSegundoParticipante);
            console.log("");
        } else if (a[i]<b[i]){
            puntosSegundoParticipante += 1
            console.log("Votos Primer Participante: "+ a[i] + " | " +"Puntos Primer Participante: " + puntosPrimerParticipante);
            console.log("");
            console.log("Votos Segundo Participante: "+ b[i] + " | " +"Puntos Segundo Participante: " + puntosSegundoParticipante);
            console.log("");
        }
    }

    let ganador 
    if (puntosPrimerParticipante>puntosSegundoParticipante){
        ganador = "Resultado: Gana el primer participante";
    }else if (puntosPrimerParticipante<puntosSegundoParticipante){
        ganador = "Resultado: Gana el Segundo participante";
    }else{
        ganador = "Resultado: Empate"
    }    
    return ganador;
}

console.log(encontrarGanador (alicia,bob));

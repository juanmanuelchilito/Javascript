function noParesDeContarImparesHasta(numero){
    let contadorImpar=0
  for (i=0;i<=numero;i++){
      if(i%2!=0){
          contadorImpar++
      }      
    }
    return contadorImpar
}

console.log(noParesDeContarImparesHasta(20));

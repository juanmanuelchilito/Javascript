const numeroSecreto = (a) => {
        
    
        let b=Math.round(Math.random()*10);
        
            if (a==b){
                return "Felicitaciones";
            } else {    
                return "intenta de nuevo, "+"Numero ingresado: "+a+" Numero Secreto: "+b
            }

}

console.log(numeroSecreto(5));
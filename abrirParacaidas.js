const abrirParacaidas = (velocidad, altura) =>{
    if (velocidad<1000 && altura >=2000 && altura < 3000){
        return 'Abrir paracaidas';
    } else{
        return 'No abrir Paracaidas';
    }
}

console.log(abrirParacaidas(220, 500));
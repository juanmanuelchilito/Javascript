function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(c,d){
    return c/d;
}

const cuadradoDeUnNumero = (a) =>{
    return multiplicar (a,a);
}


const promedioDeTresNumeros = (a,b,c) => {
    
    return dividir((a+b+c),3);
}

const calcularPorcentaje = (a,b) => {
    return (dividir(multiplicar(a,b),100));
}

const generadorDePorcentaje = (a,b) => {
    return (dividir(multiplicar(a,100),b));
}

console.log("---------- Testeo de Operaciones / Calculadora ----------");

console.log("Test suma: "+sumar(5,3));
console.log("Test multiplicar: "+multiplicar(5,3));
console.log("Test Dividir: "+dividir(3,0));
console.log("Test Cuadrado: "+cuadradoDeUnNumero(3));
console.log("Test Promedio: "+promedioDeTresNumeros(2,4,6));
console.log("Test Promedio: "+calcularPorcentaje(300,15));
console.log("Test Promedio: "+generadorDePorcentaje(2,200));



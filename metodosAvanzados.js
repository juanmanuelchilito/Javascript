let electronicos = [
    { nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
    { nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
    { nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
    { nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
    { nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
  ];


  tienda = {

    productos : electronicos,

    // Un método que nos permita calcular la ganancia total.
    gananciaTotal : function(){    
        return "Ganancia Total: $"+ this.productos.reduce(function (acum, producto){
            return acum + (producto.cantVendidos*producto.precioEnUsd)
      },0)   
    },
    

    // Un método que nos permita filtrar por cantidad de productos vendidos

    filtarCantidadProductos : function (cantidadMinimaProductos){

      return this.productos.filter( producto => producto.cantVendidos >= cantidadMinimaProductos)

    },

    //Un método que nos permita aumentar el precio en USD en un % que se indica por parámetro.

    aumentarPrecio :   function(porcentajeAumento){
      let porcentajeDecimal = porcentajeAumento/100;

      this.productos.forEach(element => {

        element.precioEnUsd += element.precioEnUsd*porcentajeDecimal;
        
      });
    }
  }
  

  console.log(tienda.gananciaTotal(electronicos));

  console.table(tienda.filtarCantidadProductos(25));

  tienda.aumentarPrecio(10)

  console.log(tienda.productos);

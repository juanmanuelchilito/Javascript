//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  

  let banco = {

    clientes: arrayCuentas,
    
    consultarCliente : function (titular) {
        for (let i=0; i<this.clientes.length ; i++){
            this.clientes[i].titularCuenta = titular
            return  this.clientes[i]
        }
    },

    depositar:  function (titular, montoADepositar){
        this.consultarCliente(titular).saldoEnPesos = this.consultarCliente(titular).saldoEnPesos + montoADepositar;
        console.log ("Depósito realizado, Tu nuevo saldo es: " +  this.consultarCliente(titular).saldoEnPesos);
        return  this.consultarCliente(titular).saldoEnPesos;      
    },

    extraccion: function (titular, montoAExtraer){
        this.consultarCliente(titular).saldoEnPesos = this.consultarCliente(titular).saldoEnPesos - montoAExtraer;
        
        if(this.consultarCliente(titular).saldoEnPesos>0){
            console.log ("Extracción realizada, Tu nuevo saldo es: " +  this.consultarCliente(titular).saldoEnPesos);
            return  this.consultarCliente(titular).saldoEnPesos; 
        } else if (this.consultarCliente(titular).saldoEnPesos<0) {
            console.log ("Saldo insuficiente");           
        }       
    }

  }
  
  //console.log(banco.depositar("Ansel Ardley",1000));
  console.log(banco.extraccion("Ansel Ardley",200000));
  



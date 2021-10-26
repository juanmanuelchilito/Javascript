let fs = require ('fs')

const jsonHelper = {

    leerJson : function (nombreArchivo){
        let contenido = fs.readFileSync(nombreArchivo, {encoding: "utf-8"})
        return JSON.parse(contenido)
    },

    escribirJson : function (nombreArchivo, datos){

        datosJSON = JSON.stringify (datos)
        return fs.writeFileSync(nombreArchivo, datosJSON)
    }
}

module.exports = jsonHelper;
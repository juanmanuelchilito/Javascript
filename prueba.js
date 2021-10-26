
let url = ["www.google.com","www.yahoo.com"]

function agregarHttp(url) {
  return "http://"+url
}

function procesar(url,agregarHttp){
  let array=[]
  for (i=0;i<url.length;i++){
      array.push(agregarHttp(url[i]))
  }
      return array
  }

  console.log(procesar(url, agregarHttp));

  module.exports = url;
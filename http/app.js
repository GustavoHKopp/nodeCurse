let http = require('http')

http.createServer(function(require, response){
  response.end('<h1>Bom dia meu querido</h1><p>como que ta a mae?</p>')
}).listen(3080)

console.log('server is runing in http://localhost:3080')
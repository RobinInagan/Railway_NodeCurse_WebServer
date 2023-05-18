const http = require('http');


http.createServer((request,response)=>{ // request = Lo que se esta solicitando La URL, los headers, en últimas es la petición al server
    //Response es lo que el servidor va a responder
    
    response.write('Hola Mundo');

    response.end();
    
})
.listen( 8080 );

console.log('Escuchando en el puerto 8080');
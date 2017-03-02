

var http = require('http');

// request lo que recibe, response la respuesta
function respuestaServidor(request, response){
	console.log('Peticion al servidor enviada');
	
	//tipo de documento html
	response.writeHead(200,{'Content-Type' : 'text/html'});

	//contenido html
	response.write('<h1> Bienvenido a Node Js </h1>');

	//finaliza la respuesta
	response.end();
}

// crea servidor escuchando el puerto 3000
http.createServer(respuestaServidor).listen(3000);

// desde la consola para dar de alta servidor: $ node holaMundo.js
console.log('servidor creado');
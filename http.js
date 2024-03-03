//helloRotaHTTP
// Carrego modulo HTTP & URL
var http = require("http");
var url = require("url");
var fs = require("fs");
// funcao CallBack
var callback = function(request, response){
 
    response.writeHead(200, {"Content-type": "text/html; charset=UTF-8"});
 
    var parts = url.parse(request.url);
 
    if(parts.path == "/"){
        fs.readFile(__dirname + '/index.html', function (err, data) {
            if (err) {
                response.end('Erro interno do servidor: ' + err);
            } else {
                response.write(data);
                response.end();
            }
        });
    } else if (parts.path == "/sobre"){
        fs.readFile(__dirname + '/sobre.html', function (err, data) {
            if (err) {
                response.end('Erro interno do servidor: ' + err);
            } else {
                response.write(data);
                response.end();
            }
        });
    } else if (parts.path == "/contato"){
        fs.readFile(__dirname + '/contato.html', function (err, data) {
            if (err) {
                response.end('Erro interno do servidor: ' + err);
            } else {
                response.write(data);
                response.end();
            }
        });
    } else {
        response.end("Rota Invalida STATUS CODE 404: " + parts.path);
    }
};
var server = http.createServer(callback);
// porta/config do servidor
server.listen(5000);
console.log("Servidor Iniciado...");
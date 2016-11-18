var http = require('http');
var fs = require('fs');
var mime = require('mime')
var staticServer= require("./internals/static-server.js");


//Importando configuraciones
var config = require('./config/config');
var IP = config.IP,
    PORT = config.PORT;

var server = http.createServer(function(req, res){
    var url = req.url;
    if(url == "/"){
        url = '/index.html'
    }


    console.log(`> Recurso solicitado> ${url}`);
<<<<<<< HEAD
    var filePath = './static' +     url;
    console.log(`> Se servirá archivo: ${filePath}`);

    //Seleccionar el tipo de mime
    var mimeType = mime.lookup(filePath);

   // git -m "servermodulas"

    fs.readFile(filePath, function(err, content){
        if(err){
            //Hubo un error
                res.writeHead(500,{
                    'Content-Type': "text/html"
                });
                console.log('> Error en la lectura de un archivo: l20 server.js');
                res.end("<h1>Error interno</h1>");
        }else{
            //No hubo error
                res.writeHead(200,{
                    'Content-Type': mimeType
                });
                console.log(`> Sirviendo: ${filePath}`);
                res.end(content);
        }
        });
=======
    staticServer.serve(url,res);
    
>>>>>>> 040b315ad240d5a4b48eff4ef7c03e9e022dd82a
    });

server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT}...`);
});


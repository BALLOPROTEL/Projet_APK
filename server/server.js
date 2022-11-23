//IMPORTATION DE EXPRESS
var express = require('express');

//INSTANTIATION DE NOTRE SERVER
var server = express();

//CONFIGURATION DES ROUTES
server.get('/', function(req, res){
res.setHeader('Content-Type', 'text/html');
res.status(200).send('<h1>BONJOUR VPERE VOILA UN PEUT CE QUE JAI FAIS<h1>');
});

//LANCH SERVER
server.listen(8080, function(){
    console.log('Server ASKO')
});
//IMPORTS
var express = require('express');

//INSTANTIATION DU SERVER
var server = express();

//CONFIGURATION DU SERVER

server.get('/', function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>BONJOUR SUR MON SERVER</h1>');
});
//LAUNCH SERVER
server.listen(8080, function(){
    console.log('Server en écoute');
})
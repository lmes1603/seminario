var express = require ('express');
var mongoose = require ('mongoose');
var server = express();

mongoose.connect('mongodb://lmes1603:lumiessa92@ds051110.mongolab.com:51110/asistente', function(err,res){
	if(err) console.log('ERROR Conectando a la BD: '+ err);
	else console.log('Conexon a la BD realizada');
});

server.configure(function(){
	server.use(express.bodyParser());
	server.use(express.methodOverride()),
	server.use(server.router);
});

server.get('/',function(req,res){
	res.send('hola, Mundo');	
});


require('./routes')(server);


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

server.listen(server_port, server_ip_address, function () {
  console.log( 'Listening on ' + server_ip_address + ', server_port ' + server_port );
});

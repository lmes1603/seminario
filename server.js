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
	res.send('Servicio Web Seminario <br> Luis Escalante <br> Ingrid Lazaro <br> Manuel Arevanos <br> Aztiley Araque <br> Jose Paz'
		+ '<br>app.get(/Usuarios,findAllusuario) <br>app.get(/Usuario/:id,usuariofindById) <br>app.post(/Usuario,addUsuario) <br>app.put(/Usuario/:id,updateusuario) <br>app.delete(/Usuario/:numero_telefono, deleteusuario)<br><br>		app.get(/eventos,findAlleventos)<br>app.get(/evento/:id,eventofindById)<br>app.post(/evento,addevento)<br>app.put(/evento/:id,updateeventos)<br>app.delete(/evento/:numero_telefono, deleteeventos)<br><br>		app.get(/historials,findAllhistorial)<br>app.get(/historial/:id,historialfindById)<br>app.post(/historial,addhistorial)<br>app.put(/historial/:id,updatehistorial)<br>app.delete(/historial/:numero_telefono, deletehistorial)<br><br>app.get(/mensajess,findAllmensajes) <br>app.get(/mensajes/:id,mensajesfindById)<br>app.post(/mensajes,addmensajes)<br>app.put(/mensajes/:id,updatemensajes)<br>app.delete(/mensajes/:numero_telefono, deletemensajes)<br><br>		app.get(/mensajehistoricos,findAllmensajehistorico)<br>app.get(/mensajehistorico/:id,mensajehistoricofindById)<br>app.post(/mensajehistorico,addmensajehistorico)<br>app.put(/mensajehistorico/:id,updatemensajehistorico)<br>app.delete(/mensajehistorico/:numero_telefono, deletemensajehistorico)<br>'

		);	
});


require('./routes')(server);


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

server.listen(server_port, server_ip_address, function () {
  console.log( 'Listening on ' + server_ip_address + ', server_port ' + server_port );
});

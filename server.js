var express = require ('express');
var mongoose = require ('mongoose');
var app = express();

mongoose.connect('mongodb://lmes1603:lumiessa92@ds051110.mongolab.com:51110/asistente', function(err,res){
	if(err) console.log('ERROR Conectando a la BD: '+ err);
	else console.log('Conexon a la BD realizada');
});

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride()),
	app.use(app.router);
});

app.get('/',function(req,res){
	res.send('hola, Mundo');	
});

require('./routes')(app);

app.listen(5000);
console.log('escuchando por el puerto 5000');
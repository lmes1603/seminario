var mongoose = require ('mongoose'),
	Schema = mongoose.Schema;
	
var historial = new Schema({
	Fecha: String, 
	hora: String, 
	numero_contacto: String, 
	numero_telefono: String 
});

module.exports = mongoose.model('historial', historial);

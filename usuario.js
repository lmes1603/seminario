var mongoose = require ('mongoose'),
	Schema = mongoose.Schema;

var usuario = new Schema({
	nombre: String,
	numero_telefono: String,
	clave_autenticacion: String
});


module.exports = mongoose.model('usuario', usuario);

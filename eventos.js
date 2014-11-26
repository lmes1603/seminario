var mongoose = require ('mongoose'),
	Schema = mongoose.Schema;

var eventos = new Schema({
	fecha: String,
	hora_inicio: String,
	hora_fin: String,
	descripcion: String,
	numero_telefono: String, //referencia
	mensaje: String, // id del mensaje
		Excepciones:[{
    	numero_contacto: String
    	}],
		Bloqueados: [{
		numero_contacto: String,
		mensaje: String // id del mensaje
		}]
});

module.exports = mongoose.model('eventos', eventos);


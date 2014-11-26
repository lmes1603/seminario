var mongoose = require ('mongoose'),
	Schema = mongoose.Schema;

var mensajehistorico = new Schema({
	Numero_fuente: String,
	Numero_destino: String,
	contenido: String,
	fecha: String
});


module.exports = mongoose.model('mensajehistorico', mensajehistorico);


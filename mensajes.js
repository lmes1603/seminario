var mongoose = require ('mongoose'),
	Schema = mongoose.Schema;

var mensajes = new Schema({
contenido: String,
multimedia: Boolean,
etiqueta: String,
numero_telefono: String
});

module.exports = mongoose.model('mensajes', mensajes);

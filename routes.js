module.exports = function(app){
	var swusuario = require ('./controladorUsuarios')
	var swusuario = require ('./controladorEventos')
	var swusuario = require ('./controladorHistorial')
	var swusuario = require ('./controladorMensajes')	
	var swusuario = require ('./controladorMensajeHistorico')	
	

	//API routes usuarios
	app.get('/Usuarios',findAllusuario);
	app.get('/Usuario/:id',usuariofindById);
	app.post('/Usuario',addUsuario);
	app.put('/Usuario/:id',updateusuario);
	app.delete('/Usuario/:numero_telefono', deleteusuario);

	app.get('/eventos',findAlleventos);
	app.get('/evento/:id',eventofindById);
	app.post('/evento',addevento);
	app.put('/evento/:id',updateeventos);
	app.delete('/evento/:numero_telefono', deleteeventos);

	app.get('/historials',findAllhistorial);
	app.get('/historial/:id',historialfindById);
	app.post('/historial',addhistorial);
	app.put('/historial/:id',updatehistorial);
	app.delete('/historial/:numero_telefono', deletehistorial);

	app.get('/mensajess',findAllmensajes);
	app.get('/mensajes/:id',mensajesfindById);
	app.post('/mensajes',addmensajes);
	app.put('/mensajes/:id',updatemensajes);
	app.delete('/mensajes/:numero_telefono', deletemensajes);

	app.get('/mensajehistoricos',findAllmensajehistorico);
	app.get('/mensajehistorico/:id',mensajehistoricofindById);
	app.post('/mensajehistorico',addmensajehistorico);
	app.put('/mensajehistorico/:id',updatemensajehistorico);
	app.delete('/mensajehistorico/:numero_telefono', deletemensajehistorico);


}
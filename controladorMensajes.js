var mensajes = require ('./mensajes');

//USUARARIO 

	//GET Buscar todos
	findAllmensajes = function(req,res){
		mensajes.find(function(err, mensajess){
			if(!err) res.send(mensajess);
			else console.log('ERROR:' + err);
		});
	};

	//Buscar por id
	mensajesfindById = function(req, res) {
  		mensajes.findById(req.param.id, function(err, mensajesu) {
	    	if(!err) {
      		res.send(mensajesu);
    		} else {
      		console.log('ERROR: ' + err);
    		}
  		});
	};

	// POST Agregar
	addmensajes = function(req, res){

			var addmensajes = new mensajes({
			contenido: req.body.contenido,
			multimedia:req.body.multimedia,
			etiqueta: req.body.etiqueta,
			numero_telefono:req.body.numero_telefono
		});

		addmensajes.save(function(err){
			if(!err) console.log('mensajes Guardada');
			else console.log('ERROR: '+err);
		});
		res.send(addmensajes);
		}

	//PUT Actualizar
	updatemensajes = function(req, res){
		mensajes.findById(req.params.id, function(err, mensajesac){
			mensajesac.contenido = req.body.contenido;
			mensajesac.multimedia = req.body.multimedia;
			mensajesac.etiqueta = req.body.etiqueta;
			mensajesac.numero_telefono = req.body.numero_telefono;


			mensajesac.save(function(err){
				if(!err) res.send('Actualizacion con exito');
				else res.send('Error '+err);
			});
		});


	}

	//DELETE

	deletemensajes = function(req, res){
		mensajes.find( {'numero_telefono':req.params.numero_telefono}, function(err, mensajesu){
			console.log(mensajesu);
			console.log(req.params.numero_telefono);
			mensajesu[0].remove(function(err){
				if(!err) res.send('mensajes Borrado');
				else res.send('ERROR: '+err)
			});
		});
	};

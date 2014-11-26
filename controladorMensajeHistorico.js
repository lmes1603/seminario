	var mensajehistorico = require ('./mensajehistorico');

//USUARARIO 

	//GET Buscar todos
	findAllmensajehistorico = function(req,res){
		mensajehistorico.find(function(err, mensajehistoricos){
			if(!err) res.send(mensajehistoricos);
			else console.log('ERROR:' + err);
		});
	};

	//Buscar por id
	mensajehistoricofindById = function(req, res) {
  		mensajehistorico.findById(req.param.id, function(err, mensajehistoricou) {
	    	if(!err) {
      		res.send(mensajehistoricou);
    		} else {
      		console.log('ERROR: ' + err);
    		}
  		});
	};

	// POST Agregar
	addmensajehistorico = function(req, res){

			var addmensajehistorico = new mensajehistorico({
			Numero_fuente: req.body.Numero_fuente,
			Numero_destino: req.body.Numero_destino,
			contenido: req.body.contenido,
			fecha:req.body.fecha

		});

		addmensajehistorico.save(function(err){
			if(!err) console.log('mensajehistorico Guardada');
			else console.log('ERROR: '+err);
		});
		res.send(addmensajehistorico);
		}



	//PUT Actualizar
	updatemensajehistorico = function(req, res){
		mensajehistorico.findById(req.params.id, function(err, mensajehistoricoac){
			mensajehistoricoac.Numero_fuente = req.body.Numero_fuente;
			mensajehistoricoac.Numero_destino = req.body.Numero_destino;
			mensajehistoricoac.contenido = req.body.contenido;
			fecha = req.body.fecha;

			mensajehistoricoac.save(function(err){
				if(!err) res.send('Actualizacion con exito');
				else res.send('Error '+err);
			});
		});


	}

	//DELETE

	deletemensajehistorico = function(req, res){
		mensajehistorico.find( {'numero_telefono':req.params.numero_telefono}, function(err, mensajehistoricou){
			console.log(mensajehistoricou);
			console.log(req.params.numero_telefono);
			mensajehistoricou[0].remove(function(err){
				if(!err) res.send('mensajehistorico Borrado');
				else res.send('ERROR: '+err)
			});
		});
	};

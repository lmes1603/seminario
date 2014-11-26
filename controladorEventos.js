	var eventos = require ('./eventos');
	//GET Buscar todos
	findAlleventos = function(req,res){
		eventos.find(function(err, eventoss){
			if(!err) res.send(eventoss);
			else console.log('ERROR:' + err);
		});
	};

	//Buscar por id
	eventofindById = function(req, res) {
  		eventos.findById(req.param.id, function(err, eventosu) {
	    	if(!err) {
      		res.send(eventosu);
    		} else {
      		console.log('ERROR: ' + err);
    		}
  		});
	};

	// POST Agregar
	addevento = function(req, res){
			var addeventos = new eventos({

			fecha: req.body.fecha,
			hora_inicio: req.body.hora_inicio,
			hora_fin: req.body.hora_fin,
			descripcion: req.body.descripcion,
			numero_telefono: req.body.numero_telefono,
			mensaje: req.body.mensaje, // id del mensaje
				Excepciones:req.body.Excepciones,
				Bloqueados: req.body.Bloqueados
		});

		addeventos.save(function(err){
			if(!err) res.send('eventos Guardada');
			else res.send('ERROR: '+err);
		});
		res.send(addeventos);
		}

	

	//PUT Actualizar
	updateeventos = function(req, res){
		eventos.findById(req.params.id, function(err, eventosac){
			eventosac.fech= req.body.fecha;
			eventosac.hora_inicio= req.body.hora_inicio;
			eventosac.hora_fin= req.body.hora_fin;
			eventosac.descripcion= req.body.descripcion;
			eventosac.numero_telefono= req.body.numero_telefono;
			eventosac.mensaje= req.body.mensaje; // id del mensaje
				eventosac.Excepciones=req.body.Excepciones;
				eventosac.Bloqueados= req.body.Bloqueados;



			eventosac.save(function(err){
				if(!err) res.send('Actualizacion con exito');
				else res.send('Error '+err);
			});
		});


	}

	//DELETE

	deleteeventos = function(req, res){
		eventos.find( {'numero_telefono':req.params.numero_telefono}, function(err, eventosu){
			console.log(eventosu);
			console.log(req.params.numero_telefono);
			eventosu[0].remove(function(err){
				if(!err) res.send('eventos Borrado');
				else res.send('ERROR: '+err)
			});
		});
	};

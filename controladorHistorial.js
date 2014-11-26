var historial = require ('./historial');

//USUARARIO 

	//GET Buscar todos
	findAllhistorial = function(req,res){
		historial.find(function(err, historials){
			if(!err) res.send(historials);
			else console.log('ERROR:' + err);
		});
	};

	//Buscar por id
	historialfindById = function(req, res) {
  		historial.findById(req.param.id, function(err, historialu) {
	    	if(!err) {
      		res.send(historialu);
    		} else {
      		console.log('ERROR: ' + err);
    		}
  		});
	};

	// POST Agregar
	addhistorial = function(req, res){
	
		var addhistorial = new historial({
			Fecha: req.body.Fecha, 
			hora: req.body.hora, 
			numero_contacto: req.body.numero_contacto, 
			numero_telefono:req.body.numero_telefono
		});

		addhistorial.save(function(err){
			if(!err) console.log('historial Guardada');
			else console.log('ERROR: '+err);
		});
		res.send(addhistorial);
		}


	//PUT Actualizar
	updatehistorial = function(req, res){
		historial.findById(req.params.id, function(err, historialac){
			historialac.Fecha=req.body.Fecha;
			historialac.hora=req.body.nuhoramero_telefono;
			historialac.numero_contacto=req.body.numero_contacto;
			historialac.numero_telefono=req.body.numero_telefono;

			
			historialac.save(function(err){
				if(!err) res.send('Actualizacion con exito');
				else res.send('Error '+err);
			});
		});


	}

	//DELETE

	deletehistorial = function(req, res){
		historial.find( {'numero_telefono':req.params.numero_telefono}, function(err, historialu){
			console.log(historialu);
			console.log(req.params.numero_telefono);
			historialu[0].remove(function(err){
				if(!err) res.send('historial Borrado');
				else res.send('ERROR: '+err)
			});
		});
	};

var usuario = require ('./usuario');
//USUARARIO 

	//GET Buscar todos
	findAllusuario = function(req,res){
		usuario.find(function(err, usuarios){
			if(!err) res.send(usuarios);
			else console.log('ERROR:' + err);
		});
	};

	//Buscar por id
	usuariofindById = function(req, res) {
  		usuario.findById(req.param.id, function(err, usuariou) {
	    	if(!err) {
      		res.send(usuariou);
    		} else {
      		console.log('ERROR: ' + err);
    		}
  		});
	};

	// POST Agregar
	addUsuario = function(req, res){
	usuario.findOne().where('numero_telefono', req.body.numero_telefono).exec(function(err, doc){
		if(doc!=null) {
			console.log(doc._id);
			res.send(doc._id);
		}
		else {
			var addusuario = new usuario({
			nombre: req.body.nombre,
			numero_telefono: req.body.numero_telefono,
			clave_autenticacion: req.body.clave_autenticacion
		});

		addusuario.save(function(err){
			if(!err) console.log('Usuario Guardada');
			else console.log('ERROR: '+err);
		});
		res.send(addusuario);
		}

	});

	}

	//PUT Actualizar
	updateusuario = function(req, res){
		usuario.findById(req.params.id, function(err, usuarioac){
			usuarioac.nombre=req.body.nombre;
			usuarioac.numero_telefono=req.body.numero_telefono;
			usuarioac.clave_autenticacion=req.body.clave_autenticacion;
			usuarioac.save(function(err){
				if(!err) res.send('Actualizacion con exito');
				else res.send('Error '+err);
			});
		});


	}

	//DELETE

	deleteusuario = function(req, res){
		usuario.find( {'numero_telefono':req.params.numero_telefono}, function(err, usuariou){
			console.log(usuariou);
			console.log(req.params.numero_telefono);
			usuariou[0].remove(function(err){
				if(!err) res.send('Usuario Borrado');
				else res.send('ERROR: '+err)
			});
		});
	};

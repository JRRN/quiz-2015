// MW de autorizacion de accessos http restringidos
exports.loginRequired = function(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		res.redirect('/login');
	}
};
//Get /Login -- Formulario de Login
exports.new = function(req,res) {
	var errors = req.session.errors || {};
	req.session.errors = {};
	res.render('sessions/new', {errors: errors});
};
// Post /Login -- Crear la session
exports.create = function(req,res){
	var login = req.body.login;
	var password = req.body.password;
	var userController = require('./user_controller');
	userController.autenticar(login, password, function(error,user) {
	if (error) { //Si hay error retomamos mensajes de error de session
		req.session.errors = [{"message":'Se ha producido un error'+error}];
		res.redirect("/login");
	return;
	}
	// Crear req.session.user y guardar campos id y username
	// La session se define por la existencia de : req.session.user
	req.session.user= {id:user.id, username:user.username};
	//res.redirect(req.session.redir.toString()); // redireccion a path anterior a login
	res.redirect(req.session.redir);
	});
};
// Delete /logout --Destruir session
exports.destroy = function(req,res) {
	delete req.session.user;
	//res.redirect(req.session.redir.toString()); // redirect a path anterior a login
	res.redirect(req.session.redir);
};
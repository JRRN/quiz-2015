var express = require('express');
var router = express.Router();

var quizController 		= require('../controllers/quiz_controller');
var commentController 	= require('../controllers/comment_controller');
var sessionController = require('../controllers/session_controller');

// Página de entrada (home page)
router.get('/', function(req, res) {
	res.render('index', { title: 'Quiz', errors: [] });
});

// Autoload de comandos con :quizId
router.param('quizId'		, quizController.load); // autoload :quizId
router.param('commentId'	, commentController.load); 

router.get('/author',function(req,res){
	res.render('author', {
				fotoPerfil: '/images/foto.png',
				Nombre: 'J.Rafa RN',
				Video: 'http://vjs.zencdn.net/v/oceans.mp4',
				errors: []
	});
});

router.get('/login'															, sessionController.new); // formulario login
router.post('/login'														, sessionController.create); // crear sesión
router.get('/logout'														, sessionController.destroy);

// Definición de rutas de /quizes
router.get('/quizes'														, quizController.index);
router.get('/quizes/:quizId(\\d+)'											, quizController.show);
router.get('/quizes/:quizId(\\d+)/answer'									, quizController.answer);
router.get('/quizes/new'													, sessionController.loginRequired, quizController.new);
router.post('/quizes/create'												, sessionController.loginRequired, quizController.create);
router.get('/quizes/:quizId(\\d+)/edit'										, sessionController.loginRequired, quizController.edit);
router.put('/quizes/:quizId(\\d+)'											, sessionController.loginRequired, quizController.update);		
router.delete('/quizes/:quizId(\\d+)'										, sessionController.loginRequired, quizController.destroy);
	
router.get('/temas'															, quizController.showtemas);
router.get('/temas/:tema'													, quizController.showbytema);

router.get('/quizes/:quizId(\\d+)/comments/new'								, sessionController.loginRequired, commentController.new);
router.post('/quizes/:quizId(\\d+)/comments'								, sessionController.loginRequired, commentController.create);
router.get('/quizes/:quizId(\\d+)/comments/:commentId(\\d+)/publish'		, sessionController.loginRequired, commentController.publish);

module.exports = router;



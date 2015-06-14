var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

// Página de entrada (home page)
router.get('/', function(req, res) {
	res.render('index', { title: 'Quiz', errors: [] });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load); // autoload :quizId

router.get('/author',function(req,res){
	res.render('author', {
				fotoPerfil: '/images/foto.png',
				Nombre: 'J.Rafa RN',
				Video: 'http://vjs.zencdn.net/v/oceans.mp4',
				errors: []
	});
});

// Definición de rutas de /quizes
router.get('/quizes'						, quizController.index);
router.get('/quizes/:quizId(\\d+)'			, quizController.show);
router.get('/quizes/:quizId(\\d+)/answer'	, quizController.answer);
router.get('/quizes/new'					, quizController.new);
router.post('/quizes/create'				, quizController.create);

module.exports = router;



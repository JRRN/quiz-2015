var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var auth = require('../controllers/author_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
router.get('/author',function(req,res){
	res.render('author', { 
				fotoPerfil: '/images/foto.png', 
				Nombre: 'J.Rafa RN', 
				Video: 'http://vjs.zencdn.net/v/oceans.mp4'
			});
});	

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;



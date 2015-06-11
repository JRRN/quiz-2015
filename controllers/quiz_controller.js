var models = require('../models/models.js');

exports.question = function(req, res) {
	models.Quiz.findAll().then(function(quiz){
		res.render('quizes/question', {pregunta: quiz[0].pregunta});		
	})
};

exports.answer = function(req, res) {
	models.Quiz.findAll().then(function(quiz){
		if (req.query.respuesta === quiz[0].respuesta){
			res.render('quizes/answer', {respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer', {respuesta: 'Incorrecto'});
		}
	})
};

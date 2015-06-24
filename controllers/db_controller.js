var models = require('../models/models.js');


exports.show = function(req,res){
	models.Quiz.findAll().then(function (_quizes){

	  	models.Comment.findAll().then(function (_comments){
	  	
		    res.render('db/index', {quizes: _quizes,
		                      comments: _comments,
		                      errors: []
		    });
		});
	});
};

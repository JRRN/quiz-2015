var models = require('../models/models.js');

/*
    El número de preguntas
    El número de comentarios totales
    El número medio de comentarios por pregunta
    El número de preguntas sin comentarios
    El número de preguntas con comentarios

*/
exports.show = function(req,res){
  models.Quiz.count().then(function (_quizes){

  models.Comment.count().then(function (_comments){

  var _midComments= _comments / _quizes;

  models.Quiz.findAll({
    include:[{model: models.Comment}]
    }).then(function (quizes){

        var _quesWithCom = 0;
        for (i in quizes){
        if (quizes[i].Comments.length)
        _quesWithCom++;
    }

    var _quesWithoutCom = _quizes - _quesWithCom;

    res.render('estadisticas/index', {quizes: _quizes,
                                      comments: _comments,
                                      midComments: _midComments,
                                      quesWithCom: _quesWithCom,
                                      quesWithoutCom: _quesWithoutCom,
                                      errors: []
    });

  })

  })
});
};



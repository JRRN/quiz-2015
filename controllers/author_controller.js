exports.authors = function(req,res){
	res.render('author', {fotoPerfil: '/images/foto.png',
				Nombre : 'J. Rafa RN',
				Video: '<iframe src="https://player.vimeo.com/video/122685857" width="500" height="281" frameborder="0"' 
				+ 'webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/122685857">'
				+'The Kill - 30 seconds to mars</a> from <a href="https://vimeo.com/user25715164">Jrramon</a>' 
				+'on <a href="https://vimeo.com">Vimeo</a>.'
				});
};

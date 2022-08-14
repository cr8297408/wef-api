const user = require('../models/perfil');

const perfilController = (req, res) => {
	if(user[0] !== null){
		res.status(200).json(user);
	} else {
		res.status(404).json('no existe el usuario')
	}
}

module.exports = {
	perfilController
}
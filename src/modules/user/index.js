const AppError = require('../../core/errors/app-error');
const UserService = require('./service');
const HttpResponse = require('../../core/response/http-response')

class UserIndex {

	async index(req, res){
		try {
			const users = await UserService.index();
			res.status(users.getStatus()).json(users.getData());
		} catch (error) {
			let response = new AppError.UnexpectedError(error)
		}
	}
}

module.exports = new UserIndex()
const AppError = require('../../core/errors/app-error');
const UserService = require('./service');
const HttpResponse = require('../../core/response/http-response');
const usuarioSchema = require('../../schemas/user'); 

class UserIndex {

	/**
	 * send request and await the response to method index
	 * @param {*} req 
	 * @param {*} res 
	 */
	async index(req, res){
		try {
			const users = await UserService.index();
			res.status(users.getStatus()).json(users.getData());
		} catch (error) {
			let response = new AppError.UnexpectedError(error);
			res.status(response.getStatus()).json(response.getData());
		}
	}

	/**
	 * send request and await the response to method store
	 * @param {*} req 
	 * @param {*} res 
	 */
	async store(req, res){
		try {
			let {
				user,
				name,
				email,
				phone,
				password,
				type,
				active
			} = await usuarioSchema.validateAsync(req.body);
			const users = await UserService.store({
				user,
				name,
				email,
				phone,
				password,
				type,
				active
			});
			res.status(users.getStatus()).json(users.getData());
		} catch (error) {
			let response = new AppError.UnexpectedError(error)
			res.status(response.getStatus()).json(response.getData());
		}
	}

	/**
	 * send request and await the response to method show
	 * @param {*} req 
	 * @param {*} res 
	 */
	 async show(req, res){
		try {
			const users = await UserService.show(req.params.id);
			res.status(users.getStatus()).json(users.getData());
		} catch (error) {
			let response = new AppError.UnexpectedError(error)
			res.status(response.getStatus()).json(response.getData());
		}
	}
 
	/**
	 * send request and await the response to method update
	 * @param {*} req 
	 * @param {*} res 
	 */
	 async update(req, res){
		try {
			const users = await UserService.update(req.body, req.params.id);
			res.status(users.getStatus()).json(users.getData());
		} catch (error) {
			let response = new AppError.UnexpectedError(error)
			res.status(response.getStatus()).json(response.getData());
		}
	}

	/**
	 * send request and await the response to method destroy
	 * @param {*} req 
	 * @param {*} res 
	 */
	 async destroy(req, res){
		try {
			const users = await UserService.destroy(req.params.id);
			res.status(users.getStatus()).json(users.getData());
		} catch (error) {
			let response = new AppError.UnexpectedError(error)
			res.status(response.getStatus()).json(response.getData());
		}
	}
}

module.exports = new UserIndex()
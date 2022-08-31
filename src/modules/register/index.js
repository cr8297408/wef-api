const AppError = require('../../core/errors/app-error');
const RegisterService = require('./service');

class UserIndex {

	/**
	 * send request and await the response to method index
	 * @param {*} req 
	 * @param {*} res 
	 */
	async index(req, res){
		try {
			const registers = await RegisterService.index();
			res.status(registers.getStatus()).json(registers.getData());
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
				name,
				description,
				price,
				active
			} = req.body;
			const registers = await RegisterService.store({
				name,
				description,
				price,
				active
			});
			res.status(registers.getStatus()).json(registers.getData());
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
			const registers = await RegisterService.show(req.params.id);
			res.status(registers.getStatus()).json(registers.getData());
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
			const registers = await RegisterService.update(req.body, req.params.id);
			res.status(registers.getStatus()).json(registers.getData());
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
			const registers = await RegisterService.destroy(req.params.id);
			res.status(registers.getStatus()).json(registers.getData());
		} catch (error) {
			let response = new AppError.UnexpectedError(error)
			res.status(response.getStatus()).json(response.getData());
		}
	}
}

module.exports = new UserIndex()
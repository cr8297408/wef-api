const bcrypt = require('bcrypt');

const BaseService = require('../../core/class/base-service');
const Register = require('../../models/register');
const AppError = require('../../core/errors/app-error');

class RegisterService extends BaseService {

	constructor(){
		super(Register)
	}
}	

module.exports = new RegisterService();
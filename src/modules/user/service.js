const bcrypt = require('bcrypt');

const BaseService = require('../../core/class/base-service');
const User = require('../../models/user');
const AppError = require('../../core/errors/app-error');

class UserService extends BaseService {

	constructor(){
		super(User)
	}

	store(body){
		try {
			body.password = bcrypt.hashSync(body.password, 10),
			console.log(body.password);
			return super.store(body);
		} catch (error) {
			return new AppError.UnexpectedError(error)
		}
	}
}	

module.exports = new UserService();
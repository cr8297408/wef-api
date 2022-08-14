const BaseService = require('../../core/class/base-service');
const User = require('../../models/user');

class UserService extends BaseService {

	constructor(){
		super(User)
	}
}

module.exports = new UserService();
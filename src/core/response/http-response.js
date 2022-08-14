const BaseResponse = require('../class/base-response');

const _context = 'HttpResponse'

class getSuccessful extends BaseResponse {
	_context = _context + 'GetSuccessful'
	constructor (data) {
		super(200, data, _context)
	}
}

class postSuccessful extends BaseResponse {
	_context = _context + 'PostSuccessful'
	constructor (data) {
		super(201, data, _context)
	}
}

class putSuccessful extends BaseResponse {
	_context = _context + 'PutSuccessful'
	constructor (data) {
		super(201, data, _context)
	}
}

class deleteSuccessful extends BaseResponse {
	_context = _context + 'DeleteSuccessful'
	constructor (data) {
		super(200, data, _context)
	}
}

module.exports = {
	getSuccessful,
	postSuccessful,
	putSuccessful,
	deleteSuccessful
}
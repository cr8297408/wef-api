const _context = 'HttpResponse'

export class getSuccessful extends BaseResponse {
	_context = _context + 'GetSuccessful'
	constructor (data) {
		super(200, data, _context)
	}
}

export class postSuccessful extends BaseResponse {
	_context = _context + 'PostSuccessful'
	constructor (data) {
		super(201, data, _context)
	}
}

export class putSuccessful extends BaseResponse {
	_context = _context + 'PutSuccessful'
	constructor (data) {
		super(201, data, _context)
	}
}

export class deleteSuccessful extends BaseResponse {
	_context = _context + 'DeleteSuccessful'
	constructor (data) {
		super(200, data, _context)
	}
}
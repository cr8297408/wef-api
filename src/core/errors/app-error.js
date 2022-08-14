import { BaseError } from '../class/base.error'

/**
 * @desc General application errors (few of these as possible)
 * @http 500
 */

const _context = 'AppError'

/** Unexpected error class */
export class UnexpectedError extends BaseError {
	constructor (error) {
		super({
			name: 'UnexpectedError',
			status: 400,
			context: _context,
			message: error.message
		})
	}
}

/** transaccional error class */
export class TransactionalError extends BaseError {
	constructor () {
		super({
			name: 'TransactionalError',
			status: 400,
			context: _context
		})
	}
}

/**
* validation error class
*/
export class ValidationError extends BaseError {
	constructor (message) {
		super({
			name: 'ValidationError',
			status: 400,
			context: 'validation error',
			message
		})
	}
}

/**
* class for unauthorized errors
*/
export class UnauthorizedError extends BaseError {
	constructor (message) {
		super({
			name: 'UnauthorizedError',
			status: 401,
			context: 'user no authorized',
			message
		})
	}
}

/**
* class for a entity no exists
*/
export class EntityDoesNotExistError extends BaseError {
	constructor (entity) {
		super({
			name: 'EntityDoesNotExistError',
			status: 404,
			context: 'entity no exists',
			message: entity
		})
	}
}
/** conditio of a entity does not show results */
export class EntityConditionDoesNotShowResults extends BaseError {
	constructor (entity) {
		super({
			name: 'EntityConditionDoesNotShowResults',
			status: 404,
			context: 'not exists a entity whit the condition',
			message: entity
		})
	}
}

export class CorsError extends BaseError {
	constructor (message) {
		super({
			name: 'CorsError',
			status: 400,
			context: 'Not allowed', 
			message
		})
	}
}

const Joi = require('joi');

const usuarioSchema = Joi.object({
	user: Joi.string()
		.alphanum()
		.min(3)
		.max(30)
		.required(),

	name: Joi.string()
		.min(3)
		.max(30)
		.required(),

	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co'] } })
		.required(),

	phone: Joi.string()
		.min(10)
		.max(12),

	password: Joi.string()
		.required(),

	type: Joi.string(),
	active: Joi.boolean(),
})

module.exports = usuarioSchema;
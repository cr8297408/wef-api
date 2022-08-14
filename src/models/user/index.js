const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
	user: {
		type: String,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
	},
	password: {
		type: String,
		required: true,
	},
	type: {
		type: String,
	},
	active: {
		type: Boolean,
		default: true,
	}
});

module.exports = new mongoose.model('Usuario', usuarioSchema);
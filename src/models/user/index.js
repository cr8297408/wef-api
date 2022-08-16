const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
	user: {
		type: String,
		unique: true
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	phone: {
		type: Number,
		unique: true
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
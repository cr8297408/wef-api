const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema({
	rol: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
})

module.exports = new mongoose.model('UserType', userTypeSchema);
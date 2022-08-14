const mongoose = require('mongoose');
const actionEnum = require('../../enums/actions');

const userTypeSchema = new mongoose.Schema({
	rol: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	actions: {
		type: Array,
		enum: actionEnum
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
})

module.exports = new mongoose.model('UserType', userTypeSchema);
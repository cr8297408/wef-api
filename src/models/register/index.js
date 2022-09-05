const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	createdBy: {
		type: String,
	},
	updatedBy: {
		type: String
	},
	active: {
		type: Boolean,
		default: true,
	}
});

module.exports = new mongoose.model('Register', registerSchema);
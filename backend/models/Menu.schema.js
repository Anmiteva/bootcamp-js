const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const menuSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	background: {
		type: String,
		required: true,
	},
	products: [
		{
			productName: {
				type: String,
				required: true,
			},
			productInfo: {
				type: String,
				required: true,
			},
			productPrice: {
				type: Number,
				required: true,
			},
		},
	],
});
module.exports = mongoose.model('Menu', menuSchema);




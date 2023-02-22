const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	customerName: {
		type: String,
		required: true,
	},
	customerAddress: {
		type: String,
		required: true,
	},
	orderDate: {
		type: Date,
		default: Date.now,
	},

	orderItems: [
		{
			productName: {
				type: String,
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
		},
	],
	orderStatus: {
		type: String,
		enum: ['pending', 'delivered'],
		default: 'pending',
	},
});

module.exports = mongoose.model('Order', orderSchema);

const express = require('express');
const Order = require('../models/Order.schema');
const orderRouter = express.Router();

// Get all orders
orderRouter.get('/', (req, res) => {
	Order.find({})
		.then((orders) => {
			res.json(orders);
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

// Get a specific order by id
orderRouter.get('/:id', (req, res) => {
	Order.findById(req.params.id)
		.then((order) => {
			if (!order) {
				return res.status(404).json({ error: 'Order not found' });
			}
			res.json(order);
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

// Create a new order
orderRouter.post('/', (req, res) => {
	const newOrder = new Order({
		customerName: req.body.customerName,
		customerAddress: req.body.customerAddress,
		orderItems: req.body.orderItems,
	
	});
	newOrder
		.save()
		.then((order) => {
			res.status(201).json(order);
		})
		.catch((err) => {
			res.status(400).json({ error: err.message });
		});
});

// Update an existing order
orderRouter.patch('/:id', (req, res) => {
	Order.findById(req.params.id)
		.then((order) => {
			if (!order) {
				return res.status(404).json({ error: 'Order not found' });
			}

			order.customerName = req.body.customerName;
			order.customerAddress = req.body.customerAddress;
			order.orderItems = req.body.orderItems;

			return order.save();
		})
		.then((order) => {
			res.json(order);
		})
		.catch((err) => {
			res.status(400).json({ error: err.message });
		});
});

// Delete an order
orderRouter.delete('/:id', (req, res) => {
	Order.findByIdAndRemove(req.params.id)
		.then((order) => {
			if (!order) {
				return res.status(404).json({ error: 'Order not found' });
			}
			res.json(order);
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

module.exports = orderRouter;

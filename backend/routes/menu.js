const express = require('express');
const menuRouter = express.Router();
const Menu = require('../models/Menu.schema');

// // Get All Products of Menu
menuRouter.get('/', function (req, res, next) {
	Menu.find({})
		.then(function (menu) {
			res.json(menu);
		})
		.catch(function (err) {
			res.json(err);
		});
});

//Create product
menuRouter.post('/', (req, res) => {
	Menu.create(req.body)
		.then((menuData) => res.json(menuData))
		.catch((err) => console.log(err));
});

// get product by id
menuRouter.get('/:id', (req, res) => {
	Menu.find({ _id: req.params.id })
		.then((menu) => res.json(menu))
		.catch((err) => console.log(err));
});

// change product details data
menuRouter.put('/:id', (req, res) => {
	Menu.findByIdAndUpdate(req.params.id, req.body, (err, menu) => {
		err ? console.log(err) : res.json(menu);
	});
});

// delete product found by id
menuRouter.delete('/:id', (req, res) => {
	Menu.findByIdAndDelete(req.params.id, req.body, (err, menu) => {
		err ? console.log(err) : res.json(menu);
	});
});

module.exports = menuRouter;

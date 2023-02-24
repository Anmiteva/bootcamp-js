let express = require('express');
let Slider = require('../models/Slider.schema');
let sliderRouter = express.Router();

// get slider data
sliderRouter.get('/', (req, res) => {
	Slider.find({})
		.then((slider) => res.json(slider))
		.catch((err) => console.log(err));
});

// create slider data
sliderRouter.post('/', (req, res) => {
	Slider.create(req.body, (err, slider) => {
		err ? console.log(err) : res.json(slider);
	});
});

// change slider data
sliderRouter.put('/:id', (req, res) => {
	Slider.findByIdAndUpdate(req.params.id, req.body, (err, slider) => {
		err ? console.log(err) : res.json(slider);
	});
});

// delete slider data by id
sliderRouter.delete('/:id', (req, res) => {
	Slider.findByIdAndDelete(req.params.id, req.body, (err, slider) => {
		err ? console.log(err) : res.json(slider);
	});
});

module.exports = sliderRouter;

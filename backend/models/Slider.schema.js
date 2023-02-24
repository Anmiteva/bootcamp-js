let mongoose = require('mongoose');
let SliderSchema = new mongoose.Schema({
	background: String,
	intro: String,
	separator: String,
	title: String,
	description: String,
});

module.exports = mongoose.model('Slider', SliderSchema);

let express = require('express');
let Reservation = require('../models/Reservation.schema');
let reservationRouter = express.Router();

// get reservation
reservationRouter.get('/', (req, res) => {
	Reservation.find({})
		.then((reservation) => res.json(reservation))
		.catch((err) => console.log(err));
});

// create reservation data
reservationRouter.post('/', (req, res) => {
	Reservation.create(req.body, (err, reservation) => {
		err ? console.log(err) : res.json(reservation);
	});
});

// change reservation data
reservationRouter.put('/:id', (req, res) => {
	Reservation.findByIdAndUpdate(req.params.id, req.body, (err, reservation) => {
		err ? console.log(err) : res.json(reservation);
	});
});

// delete reservation data by id
reservationRouter.delete('/:id', (req, res) => {
	Reservation.findByIdAndDelete(req.params.id, req.body, (err, reservation) => {
		err ? console.log(err) : res.json(reservation);
	});
});

module.exports = reservationRouter;
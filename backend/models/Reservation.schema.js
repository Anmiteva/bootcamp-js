let mongoose = require('mongoose');
let ReservationSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    clients: {
        type: Number,
        required: true
    },
    dateAndTime: {
        type: Number,
        required: true
    }
    ,
    expireTime: {
        type: Number,
        
    }
})

module.exports = mongoose.model('Reservation', ReservationSchema)
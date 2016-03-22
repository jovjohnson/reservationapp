var mongoose = require('mongoose');

var Reservation = mongoose.model('Reservation', {
	time: Date,
	name: String,
	size: Number,
	outdoor: Boolean,
	checked: Boolean
});

module.exports = Reservation;



// var Reservation = mongoose.model('Reservation', {
// 	time: Date,
// 	name: String,
// 	size: Number,
// 	outdoor: Boolean,
// 	checked: Boolean
// })
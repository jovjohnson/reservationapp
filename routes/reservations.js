'use strict';

var express = require('express');
var router = express.Router();

var Reservation = require('../models/reservation');


router.get('/', function(req, res) {
	Reservation.find({}, function(err, reservations) {
		if(err) {
		return res.status(400).send(err);
		}
		res.send(reservations);
	});
});

router.get('/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	Reservation.findOne({_id: Reservation.id}, function(err, reservations) {
		if(err) {
		return res.status(400).send(err);
		} 
		res.send(reservations);
	})
});


router.post('/', function(req, res) {
	new Reservation({
	time: req.body.time,
	name: req.body.name,
	size: req.body.size,
	outdoor: req.body.outdoor,
	checked: req.body.checked
	})
	.save(function(err, newReservation) {
		if(err) {
			return res.status(400).send(err);
		}
		res.send(newReservation);
	})
})

router.delete('/:id', function(req, res) {
	Reservation.remove({_id:req.params.id}, function(err) {
		if(err) {
			return console.log(err)
	} else {
			res.send('bye');
				}
			})
	})


router.put('/:id', function(req, res) {
	Reservation.findById(req.params.id, function(err, reservation) {
		reservation.time =req.body.time;
		reservation.name =req.body.name;
		reservation.size = req.body.size;
		reservation.outdoor = req.body.outdoor;
		reservation.checked = req.body.checked;
		reservation.save(function(err) {
			if(err) {
				console.log(err);
			}
			else {
				res.send(reservation);
			}
		})
	})
})

module.exports = router;
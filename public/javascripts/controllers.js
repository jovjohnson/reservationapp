'use strict';

var app = angular.module('resApp');

app.controller('resCtrl', function($scope, resService, $http) {

	$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
	

	function render() {
		resService.get()
			.then(function(res) {
				var currentReservations = res.data;
				$scope.reservations = currentReservations;
				console.log('here:', $scope.reservations);
			}, function (err) {
				console.log(err);
		});
	}

	render();

$scope.addReservation = function() {
		resService.create($scope.newRes)
		.then(function (res) {
			console.log('added!');
			$scope.newRes = {};
			render();
		}, function (err) {
			console.error(err);
		});
	}

$scope.deleteRes = function() {
	resService.remove(this.reservation._id)
	.then(function(res) {
		render();
	}, function(err) {
		console.log(err);
	});
}


$scope.edit = function (id) {
	console.log(id);
	$http.get('/reservations/' + id).success(function(response) {
		$scope.updateRes = response;
	})
}




$scope.updateReservation = function() {
	console.log($scope.updateRes);
	resService.edit(this.reservation._id)
	.then(function(res) {
		$scope.updateRes = res.data;
	}, function(err) {
		console.log(err);
	});
}




















});
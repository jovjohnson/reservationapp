'use strict';

var app = angular.module('resApp');

app.service('resService', function($http) {

	this.get = function () {
  	return $http.get('/reservations');
  }

	this.remove = function (reservationID) {
    return $http.delete(`/reservations/${reservationID}`);
  };

  this.create = function (newRes) {
    return $http.post('/reservations', newRes);
  };

  this.edit = function (reservationID) {
    return $http.put(`/reservations/${reservationID}`, reservationID);
  };

  // this.select = function () {
  // 	return $http.get(`/reservations/${reservationID}`);
  // }

})
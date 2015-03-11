'use strict';
 
angular.module('myApp.home', ['ngRoute', 'firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope', '$location', '$firebaseAuth', function($scope,$location,$firebaseAuth) {

	var firebaseObj = new Firebase("https://boiling-inferno-1527.firebaseio.com");
	var loginObj = $firebaseAuth(firebaseObj);
  
  $scope.user = {};
  $scope.SignIn = function(e){ 
     e.preventDefault();
     var username = $scope.user.email;
     var password = $scope.user.password;
     loginObj.$authWithPassword({
                email: username,
                password: password
            })
            .then(function(user) {
                console.log('Authentication successful');
                $location.path('/welcome')
            }, function(error) {
                console.log('Authentication failure');
            });
  }
}]);
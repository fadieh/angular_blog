'use strict';
 
angular.module('myApp.home', ['ngRoute', 'firebase'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

 
.controller('HomeCtrl', ['$scope', '$location', 'CommonProp', '$firebaseAuth', function($scope,$location,CommonProp,$firebaseAuth) {

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
                CommonProp.setUser(user.password.email);
            }, function(error) {
                console.log('Authentication failure');
            });
  }
}])

.service('CommonProp', function() {
    var user = '';
 
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
});
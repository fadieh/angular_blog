//  defining app routes. eg. how to hande a request like /home
//  to define routes, need an angularJS module called ngRoute
//  to use ngRoute, need to inject it or add into our app
'use strict';

angular.module('myApp', [
	'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
	// routes will be here
}])
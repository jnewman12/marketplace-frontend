// main js file of app
var App = angular.module('marketplace', ['ui.router']);

App.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		// states are the routes
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
			controller: 'MainCtrl'
		})
	$urlRouterProvider.otherwise('home');	
}])

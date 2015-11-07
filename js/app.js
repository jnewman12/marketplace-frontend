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
			controller: 'MainCtrl',
		})
		.state('login', {
			url: '/login',
			templateUrl: 'auth/_login.html',
			controller: 'AuthCtrl',
			onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
            $state.go('home');
           })
          }]
		})
	$urlRouterProvider.otherwise('home');	
}])

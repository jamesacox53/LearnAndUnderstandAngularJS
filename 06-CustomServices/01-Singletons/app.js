// AngularJS Services are implemented as Singletons. There's only one
// of them. For example when $log is injected to mainController it's
// the same $log object that's injected to secondController. $scope
// is an exception to the rule, $scope in AngularJS is a child scope.
// Certain circumstances like passing it to a controller causes a new
// child scope to be created. They all inherit from the same object,
// the root scope that's attached to your app. Then you get a new
// copy, a child scope for each controller. $scope is not exactly
// a singleton. But other things like $routeParams, $log and other
// AngularJS ng whatever the case is modules and services that are
// injected are singletons.

// What's more, when you create your own service you're creating a
// singleton, a piece of functionality or some data that can be
// shared across pages in your single page application.

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';

    $log.main = 'Property from main';
    $log.log($log);
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;

    $log.second = 'Property from second';
    $log.log($log);
    
}]);

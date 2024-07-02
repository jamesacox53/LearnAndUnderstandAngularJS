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
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

// You can restrict your directive to only be implemented or used by certain
// HTML implementations. For example using: <search-result> or <div search-result>.
// This is done with the restrict property. AngularJS made the choice that you use
// single letter short-hand to say what it is you want. For example for an element
// and an attribute we can use 'AE'. 'AE' is the default so if that's what you want
// you don't have to use the restrict attribute. AngularJS just recommends 'AE'.
// You can also have a class 'C' and a comment 'M'. Normally you won't use class or 
// comment.
myApp.directive('searchResult', function() {
    return {
        restrict: 'AECM',
        template: 
        `<a href="#" class="list-group-item">
            <h4 class="list-group-item-heading">Doe, John</h4>
            <p class="list-group-item-text">555 Main St., New York, NY 1111</p>
        </a>`,
        replace: true
    };
});
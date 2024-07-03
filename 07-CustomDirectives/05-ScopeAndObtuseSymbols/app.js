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

// As the searchResult directive is used in the main.html page which is connected
// to the mainController. By default anything in the model for the template that
// contains the directive, the directive also has access to. In other words the
// model for the directive is also whatever the model is for the template. So by
// default the searchResult directive has access to everything on the $scope. This
// is good but it's also dangerous, the directive could change things in the $scope
// and this might have unintended consequences.
//
// AngularJS provides a method to isolate the model part of the directive from the
// model from whatever page contains the directive. This is called isolated scope.
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $scope.person = {
        name: 'Jack Doe',
        address: '556 Main St., New York, NY 11111'
    };
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

// To isolate the scope we add the property 'scope' to the directive. Once we have
// added the scope property then we have isolated the scope. The scope property is the
// model. We can poke holes in the garden that the isolated scope has put up to pass
// variables through. AngularJS does it through custom attributes on the directive
// (normalization) and the symbols: '@', '=' and '&'. The '@' means text binding, 
myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personName: '@',
           personAddress: '@'
       }
   }
});

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
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    };

    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' +
        person.state + ', ' + person.zip; 
    }
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

// There's one more thing we might want to do. What if we had a function
// on the scope ($scope) of the controller that is defined in the template that
// contains the directive that we wanted to have access to? You can use the '&'
// symbol. '&' means in AngularJS that this is a function, the hole that I'm poking
// is a function.
myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObj: "=",
           formattedAddressFunc: "&"
       }
   }
});

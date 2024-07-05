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
    
    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
        },
        {
        name: 'Jane Doe',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
        },
        {
        name: 'George Doe',
        address: '111 Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
        }
    ]
    
    $scope.formattedAddress2 = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

// It's annoying to write compile and then post so AngularJS provides a short
// hand for this: link. link is the same as an empty compile returning a post
// link. This is what you'll normally do if it's too complex and you can't do
// it inside the HTML itself of the directive. Every time the directive is used
// you'll have access to the scope and the HTML for that particular instance.
myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        link: function(scope, elements, attrs) {
            console.log('Linking...');
            console.log(scope);
                   
            if (scope.personObject.name == 'Jane Doe') {
                elements.removeAttr('class');
            }
                   
            console.log(elements);
        }
    }          
});

// Me: You can use the link function to pass functions to directives that you don't want to
// pass in by an attribute. Functions that should be used by the directive but won't change
// depending on what calls the directive. It lets you have less attributes.
myApp.directive("searchResultTest", function() {
    function formattedAddress(person) {
        return '2: ' + person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
    }
    
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresulttest.html',
        replace: true,
        scope: {
            personObject: "="
        },
        link: function(scope, elements, attrs) {
            scope.formattedAddress = formattedAddress;

            console.log(scope);
            console.log(scope.formattedAddress);
            console.log(elements[0]);
        }
    }          
});
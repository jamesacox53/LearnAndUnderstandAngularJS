var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    $scope.name = 'Main';
    
    
}]);

// AngularJS gives us a new instance of the $scope object each
// time we request it in a separate controller.
myApp.controller('secondController', ['$scope', function($scope) {
    $scope.name = 'Second';
    
    
}]);
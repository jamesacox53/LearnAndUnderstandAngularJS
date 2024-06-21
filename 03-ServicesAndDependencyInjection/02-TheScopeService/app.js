var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    // $scope is the middle piece between the view
    // and the controller. The $scope defines the data
    // that will go back and forth between the view and this
    // controller.
    
    $scope.name = 'Tony';
    $scope.occupation = 'Software Developer';

    $scope.getName = function() {
        return this.name;
    }

    console.log($scope);

    console.log($scope.getName());
});
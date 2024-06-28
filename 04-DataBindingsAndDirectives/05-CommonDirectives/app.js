var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;
    
    $scope.isLessThanCharacters = function() {
        return $scope.handle.length < $scope.characters;
    };

    $scope.isMoreThanCharacters = function() {
        return $scope.handle.length > $scope.characters;
    };

    $scope.rules = [
        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }
    ];

}]);

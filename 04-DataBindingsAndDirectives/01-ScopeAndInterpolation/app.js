var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'James';

    var timeoutFunc = function() {
        $scope.name = 'Everybody'
    } 
    
    $timeout(timeoutFunc, 3000);
}]);

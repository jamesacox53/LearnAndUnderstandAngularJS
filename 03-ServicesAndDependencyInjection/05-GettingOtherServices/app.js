var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    $log.log("This logs some information");
    $log.info("This is some information");
    $log.warn("This is a warning message");
    $log.debug("This is some debug information");
    $log.error("This is an error message");

    $scope.name = 'John';
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.log($resource);
});
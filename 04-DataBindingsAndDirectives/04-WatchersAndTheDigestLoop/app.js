var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }

    $scope.$watch('handle', function(newValue, oldValue) {
        console.info('Changed!');
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);
    });

    // Function that will be executed outside the AngularJS context.
    // When this executes AngularJS won't update everything as it was
    // outside the AngularJS context so it never started the digest loop.
    // It didn't cycle through the watch list and so never updated the
    // page.
    setTimeout(function() {
        $scope.handle = 'newTwitterHandle';
        console.log('Scope changed!');
    }, 1000);
    
    // One way to handle this is to manually tell AngularJS that what
    // I'm about to do here is going to cause a change that should start
    // the digest cycle, you should start looking through the watch list
    // and start updating the page if necessary.
    setTimeout(function() {
        $scope.$apply(function() {
            $scope.handle = 'newerTwitterHandle';
            console.log('Scope changed!');
        });
    }, 5000);

    // AngularJS includes some services to make this easier. $timeout is
    // a service that does setTimeout but wrapped with the $scope.$apply.
    // So there might be a service that's a part of the AngularJS architecture
    // that does what you want without having to use $scope.$apply.
    $timeout(function() {
        $scope.handle = 'evenNewerTwitterHandle';
        console.log('Scope changed!');
    }, 10000);
}]);

var myApp = angular.module('myApp', []);

/* Simple method to explain dependency injection:
    myApp.controller('mainController', function($scope, $log) {
        $log.info($scope);
    });

// Minified:
    myApp.controller("mainController",function(o,n){n.info(o)});
*/

/* Better way to do dependency injection that can be minified
    myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
        $log.info($scope);
    }]);

    // Minified:
    myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);
*/

myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);
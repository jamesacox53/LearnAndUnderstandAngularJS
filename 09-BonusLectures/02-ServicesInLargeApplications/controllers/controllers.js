import weatherApp from '../app.js';
import apiKey from '../../apiKey.js';

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });

    $scope.submit = function() {
        $location.path("/forecast");
    }
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    
    $scope.getWeatherResults = function() {
        weatherService.getWeatherResults($scope.city, $scope.days, apiKey)
        .then(function(weatherArr) {
            $scope.weatherArr = weatherArr;
        });
    }
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }

    $scope.dateFormat = 'MMM d, y HH:mm:ss';

    $scope.getWeatherResults();
}]);
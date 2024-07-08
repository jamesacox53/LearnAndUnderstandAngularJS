import weatherApp from '../app.js';
import apiKey from '../../apiKey.js';

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    function getWeatherResults(city, days, apiKey) {
        const daysInt = parseInt(days, 10);
        
        const weatherAPI = $resource('https://api.openweathermap.org/data/2.5/forecast',
            { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
        
        const endDay = new Date();
        endDay.setDate(endDay.getDate() + daysInt);
        endDay.setHours(0, 0, 0, 0);

        return weatherAPI.get({ q: city, appid: apiKey })
        .$promise.then(function(weatherResults) {
            const weatherArr = weatherResults.list;

            return weatherArr.filter(weatherObj => (new Date(weatherObj.dt * 1000)) < endDay);
        });
    };
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    
    $scope.getWeatherResults = function() {
        getWeatherResults($scope.city, $scope.days, apiKey)
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
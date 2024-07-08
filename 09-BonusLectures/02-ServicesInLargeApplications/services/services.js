import weatherApp from '../app.js';

// SERVICES
weatherApp.service('cityService', function() {
    this.city = "London";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.getWeatherResults = function(city, days, apiKey) {
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
}]);
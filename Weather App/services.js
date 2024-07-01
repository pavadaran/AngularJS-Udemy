// SERVICES
weatherApp.service('cityService', function () {
    this.city = "New York";
});

weatherApp.service('weatherService', ['$resource', function ($resource) {
    this.GetWeather = function (city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { get: { method: "JSONP" } });

        return weatherAPI.get({
            q: city,
            cnt: days,
            appid: '8ff224cf7b65122a60a0c615d9721e22'
        });
    }
}]);
// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", {get: {method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({ 
        q: $scope.city, 
        cnt: $scope.days,
        appid: '8ff224cf7b65122a60a0c615d9721e22'
    });
    
    $scope.convertToCelcius = function(degK) {
        return Math.round(degK - 273.15);
    };

    $scope.convertToDate = function(dt) {
        return new Date(dt*1000);
    }
}]);
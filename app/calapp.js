var MyApp = angular.module('MyApp', []);

MyApp.filter('reverse', [function(){
    return function (string) {
        return string.split('').reverse().join('');
    }
}]);

MyApp.controller('CalculatorController', function($scope){
    $scope.add = function(){
        $scope.sum = $scope.num1+$scope.num2;
    }
});

MyApp.factory('PlayerLocalApi', function(){
   //var data = [{"Name":"DJ Kumar", "Age":33}];
    var data = [{ "Id": "1", "Name": "DJ Kumar", "Age": 35}, {"Id": "2", "Name": "Sachin Tendulkar", "Age": 40}];
    var PlayerLocalApi = {};
    PlayerLocalApi.getPlayers = function () {
        return data;
    }
    
    return PlayerLocalApi;
    
});

/*
MyApp.factory('PlayerApi', function($http){
    
   var urlBase = "htpp://localhost:61409/api";
   var PlayerApi = {};
    PlayerApi.getPlayers = function(){
        return $http.get(urlBase + '/players');
    }
    
    return PlayerApi;
});*/
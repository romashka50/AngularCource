var app = angular.module('myModule', []);

app.controller('TestController', function($scope){
    $scope.myVar = 10;
    setTimeout(function(){
        $scope.myVar2 = 10;
    }, 1000);
});
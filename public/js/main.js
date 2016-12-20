var app = angular.module('myModule', []);

app.controller('TestController', function(){
    this.myVar = 10;
    this.myVar2 = 100;
}).controller('Ctrl2', function($scope){

});
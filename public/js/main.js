var app = angular.module('myModule', []);

app.controller('MyCtrl', function (myCustomFact) {
    var self = this;

    self.myVar = 10;
    self.myVar2 = 100;

    self.sum = function(){
        return myCustomFact.sum(self.myVar, self.myVar2);
    };
}).directive('myCustomTag', function () {
    return {
        restrict    : 'E',
        templateUrl : 'views/customDir.html',
        controller  : 'MyCtrl',
        controllerAs: 'myCtrl'
    }
}).factory('myCustomFact', function(){
    return {
        sum: function(a, b){
            return a + b
        }
    }
});


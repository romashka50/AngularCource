var app = angular.module('myApp', []);

app.controller('testCtrl', function ($scope) {
    $scope.items = [...];
});

app.directive('listItem', function ($compile) {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            item: '='
        },
        template: '<li></li>',
        link    : function (scope, element) {
            if (angular.isDefined(scope.item)) {
                element.append('<h4>{{item.text}}</h4>');
                $compile(element.contents())(scope)
            }
        }
    }
});

app.directive('listManager', function () {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            items: '='
        },
        template: '<ul><list-item ng-repeat="item in items track by $index" item="item"></list-item></ul>'
    }
});


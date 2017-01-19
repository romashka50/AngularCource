function CommentService(UserService) {
    var serviceObject;

    function getComments() {
        return ['A', 'B'];
    }

    serviceObject = {
        getComments: getComments // public
    };

    return serviceObject;
}

CommentService.$inject = ['UserService'];

angular
    .module(AppConfig.commentModule)
    .factory('CommentService', CommentService);

/*
angular
    .module(AppConfig.commentModule)
    .factory('CommentService', ['UserService', function (UserService) {
        var serviceObject;

        function getComments() {
            return ['A', 'B'];
        }

        serviceObject = {
            getComments: getComments // public
        };

        return serviceObject;
    }]);
*/

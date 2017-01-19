/* function UserCtrl(UserService, CommentService) {
    var self = this;

    function getCurrentUser() {
        self.currentUser = self.user.getCurrentUser();
    }

    self.getCurrentUser = getCurrentUser;
    self.user = UserService;
    self.commentsService = CommentService;

    self.comments = self.commentsService.getComments();

    getCurrentUser();
}

UserCtrl.$inject = ['UserService', 'CommentService']; */

function UserCtrl(UserService, CommentService, $scope) {
    $scope.user = UserService;
    $scope.commentsService = CommentService;

    $scope.comments = $scope.commentsService.getComments();
}

UserCtrl.$inject = ['UserService', 'CommentService', '$scope'];

angular
    .module(AppConfig.userModule)
    .controller('UserCtrl', UserCtrl);

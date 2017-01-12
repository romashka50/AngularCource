function UserCtrl(UserService) {
    var self = this;

    function getCurrentUser() {
        self.currentUser = self.user.getCurrentUser();
    }

    self.getCurrentUser = getCurrentUser;
    self.user = UserService;

    getCurrentUser();
}

UserCtrl.$inject = ['UserService'];

angular
    .module(AppConfig.userModule)
    .controller('UserCtrl', UserCtrl);

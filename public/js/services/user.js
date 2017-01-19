function UserService() {
    this.firstName = 'Ivan';
    this.lastName = 'Pupkin';
}

angular.module(AppConfig.userModule).service('UserService', UserService);

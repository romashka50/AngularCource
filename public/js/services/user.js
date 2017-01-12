
function UserService() {
    this.getCurrentUser = function(){
        return {
            firstName: 'Ivan',
            lastName: 'Pupkin'
        }
    }
}

angular.module(AppConfig.userModule).service('UserService', UserService);

angular.module(AppConfig.mainApp, [
    AppConfig.userModule,
    AppConfig.commentModule
]);

angular.module(AppConfig.userModule, []);
angular.module(AppConfig.commentModule, []);

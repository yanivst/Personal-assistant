var perssonalAssistant = angular.module('perssonalAssistant',["ngRoute","ui.bootstrap"]);

perssonalAssistant.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    })
            .when("/home", {
        templateUrl: "app/home/home.html",
        controller: "homeCtrl"
    })
});
                                           
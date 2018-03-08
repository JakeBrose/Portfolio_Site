'use strict';

angular.module("portfolio",["ngRoute"])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
            })
    });
'use strict';

angular.module("portfolio",["ngRoute"])
  .config($routeProvider => {
    $routeProvider
      .when("/", {
        templateUrl: "partials/home.html",
      })
      .when("/resume", {
        templateUrl: "partials/resume.html",
      })
      .when("/portfolio", {
        templateUrl: "partials/portfolio.html",
      })
      .when("/about", {
        templateUrl: "partials/about.html",
      })
      .when("/contact", {
        templateUrl: "partials/contact.html",
      })
    });
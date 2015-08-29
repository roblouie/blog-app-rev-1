'use strict';

angular
  .module('blogApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngMaterial',
    'ui.router',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/article/:id/:title', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl',
        resolve: {
            DataPrepService: ['$route', 'DataService',
                function($route, DataService) {

                    return DataService.getEntry($route.current.params.id);
                }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

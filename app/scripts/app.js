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
        controller: 'MainCtrl',
        resolve: {
            DataPrepService: ['DataService',
                function(DataService) {
                    return DataService.getPaginatedEntries(10, 1);
                }],
            ColumnSize: ['$mdMedia',
                function($mdMedia) {
                    var numberOfColumns = 1;
                    if ($mdMedia('gt-xl')) numberOfColumns = 4;
                    if ($mdMedia('(min-width: 1200px) and (max-width: 2000px')) numberOfColumns = 3;
                    if ($mdMedia('md') || $mdMedia('lg')) numberOfColumns = 2;
                    if ($mdMedia('sm')) numberOfColumns = 1;

                    return numberOfColumns;
                }]
        }
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

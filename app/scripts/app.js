'use strict';

angular
    .module('blogApp', [
        'ngRoute',
        'material.core',
        'material.components.backdrop',
        'material.components.button',
        'material.components.icon',
        'material.components.sidenav',
        'material.components.menuBar',
        'material.components.card',
        'material.components.content',
        'ngAnimate'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main',
                resolve: {
                    DataPrepService: ['DataService',
                        function(DataService) {
                            return DataService.getPaginatedEntries(10, 1);
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
            .when('/code', {
                templateUrl: 'views/code.html',
                controller: 'CodeCtrl',
                controllerAs: 'code',
                resolve: {
                    DataPrepService: ['DataService',
                        function(DataService) {
                            return DataService.getCodeEntries(10, 1);
                        }]
                }
            })
            .when('/life', {
                templateUrl: 'views/life.html',
                controller: 'LifeCtrl',
                controllerAs: 'life',
                resolve: {
                    DataPrepService: ['DataService',
                        function(DataService) {
                            return DataService.getLifeEntries(10, 1);
                        }]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    });


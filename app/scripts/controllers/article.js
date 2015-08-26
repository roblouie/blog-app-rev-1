'use strict';

angular.module('blogApp')
  .controller('ArticleCtrl', function ($scope, DataPrepService, $routeParams, $mdUtil, $mdSidenav, $log) {
        $scope.toggleLeft = buildToggler('left');

        $scope.entry = DataPrepService.data;

        angular.element(document).ready(function () {
            Prism.highlightAll();
        });


        function buildToggler(navID) {
            var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            },200);
            return debounceFn;
        }
  });

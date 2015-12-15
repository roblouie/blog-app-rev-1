'use strict';

angular.module('blogApp')
  .controller('ArticleCtrl', function ($scope, DataPrepService, $routeParams, $mdUtil, $mdSidenav, loadingSpinnerService) {
        loadingSpinnerService.hideLoader();
        $scope.toggleLeft = buildToggler('left');

        $scope.entry = DataPrepService.data;

        if ($scope.entry.featured_image && $scope.entry.featured_image.excerpt && $scope.entry.featured_image.excerpt.indexOf('doNotShow') > 0) {
            $scope.entry.featured_image = null;
        }

        angular.element(document).ready(function () {
            Prism.highlightAll();
        });


        function buildToggler(navID) {
            var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                    .toggle();
            },200);
            return debounceFn;
        }
  });

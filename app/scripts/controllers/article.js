'use strict';

angular.module('blogApp')
  .controller('ArticleCtrl', function ($scope, DataService, $routeParams, $mdUtil, $mdSidenav, $log) {
        $scope.toggleLeft = buildToggler('left');
        DataService.getEntry($routeParams.id).then(function(response) {
        $scope.entry = response.data;
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

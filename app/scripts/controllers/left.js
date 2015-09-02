'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:LeftCtrl
 * @description
 * # LeftCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('LeftCtrl', function ($scope) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
  });

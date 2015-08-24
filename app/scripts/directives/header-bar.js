'use strict';

angular.module('blogApp')
  .directive('headerBar', function ($mdSidenav, $log, $mdUtil) {
    return {
      templateUrl: '../../views/directives/header-bar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.toggleLeft = buildToggler('left');

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
      }
    };
  });

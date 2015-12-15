'use strict';

/**
 * @ngdoc directive
 * @name blogApp.directive:loadingSpinner
 * @description
 * # loadingSpinner
 */
angular.module('blogApp')
  .directive('loadingSpinner', function (loadingSpinnerService) {
    return {
      restrict: 'E',
      scope: {
        show: '=?'
      },
      replace: true,
      template:
        '<div id="loading-spinner" ng-show="show">' +
          '<div id="loading-wrapper">' +
            '<div class="loader"></div>' +
          '</div>' +
        '</div>',

      link: function postLink(scope, element, attrs) {
        scope.show = true;
        loadingSpinnerService.setVisibilityToggle(scope);
      }
    };
  });

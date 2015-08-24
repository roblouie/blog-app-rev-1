'use strict';

angular.module('blogApp')
  .directive('sideNav', function () {
    return {
      templateUrl: '../../views/directives/side-nav.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
          scope.postView = angular.isDefined(attrs.postView);
      }
    };
  });

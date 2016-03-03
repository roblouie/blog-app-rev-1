'use strict';

/**
 * @ngdoc directive
 * @name blogApp.directive:blogMeta
 * @description
 * # blogMeta
 */
angular.module('blogApp')
  .directive('blogMeta', function (metaService) {
    return {
      restrict: 'E',
      template: '<meta name="description" content="{{content}}">',
      replace: true,
      scope: {},
      link: function postLink(scope, element) {
        metaService.setScope(scope);
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name blogApp.directive:livefyreComments
 * @description
 * # livefyreComments
 */
angular.module('blogApp')
  .directive('livefyreComments', function () {
    return {
      template: '<div id="livefyre-comments"></div>',
        replace: true,
      restrict: 'E',
        scope: {articleId: '@articleId'},
      link: function postLink(scope) {
          fyre.conv.load({}, [{
              el: 'livefyre-comments',
              network: "livefyre.com",
              siteId: "377735",
              articleId: scope.articleId,
              signed: false,
              collectionMeta: {
                  articleId: scope.articleId,
                  url: fyre.conv.load.makeCollectionUrl(),
              }

          }], function() {});
      }
    };
  });

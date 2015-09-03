'use strict';

/**
 * @ngdoc directive
 * @name blogApp.directive:articleContent
 * @description
 * # articleContent
 */
angular.module('blogApp')
    .directive('articleContent', function () {
        return {
            restrict: 'A',
            scope: {html: '=html'},
            link: function postLink(scope, element) {
                element.html(scope.html);

                var codeWrappers = element.find('pre');
                if (codeWrappers.length) Prism.highlightAll();
            }
        }
    });

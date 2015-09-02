'use strict';

/**
 * @ngdoc directive
 * @name blogApp.directive:articleContent
 * @description
 * # articleContent
 */
angular.module('blogApp')
    .directive('articleContent', function ($mdMedia) {
        return {
            restrict: 'A',
            scope: {html: '=html'},
            link: function postLink(scope, element) {
                element.html(scope.html);

                var codeWrappers = element.find('pre');
                if (codeWrappers.length) {
                    Prism.highlightAll();
                    growCodeWrapperWidthOnLargeScreen();
                }

                function growCodeWrapperWidthOnLargeScreen() {
                    if ($mdMedia('(min-width: 750px)')) {
                        var backgroundWidth = document.querySelector('#main-listing-background').offsetWidth;
                        var marginWidth = 100;
                        var maxWidth = backgroundWidth - marginWidth;

                        for (var i = 0; i < codeWrappers.length; i++) {
                            var widthOfCode = element.find('pre').children()[0].offsetWidth;
                            var newWidth = widthOfCode < maxWidth ? widthOfCode : maxWidth;

                            codeWrappers[i].setAttribute("style", "width:" + newWidth + "px");
                        }
                    }
                }
            }
        };
    });

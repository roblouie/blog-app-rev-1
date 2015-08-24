'use strict';

angular.module('blogApp')
  .filter('rawHtml', function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    };
  });

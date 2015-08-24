'use strict';

angular.module('blogApp')
  .filter('titleUrl', function () {
    return function (input) {
      return input.replace(' ', '-').replace("'", '');
    };
  });

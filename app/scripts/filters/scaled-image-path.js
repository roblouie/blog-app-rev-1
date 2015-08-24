'use strict';

angular.module('blogApp')
  .filter('scaledImagePath', function () {
    return function (input, size) {
      //if (size == 'small') {
          return input.replace('.jpg', '-825x510.jpg');
      //}
    };
  });

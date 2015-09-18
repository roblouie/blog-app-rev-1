'use strict';

/**
 * @ngdoc directive
 * @name blogApp.directive:entryListing
 * @description
 * # entryListing
 */
angular.module('blogApp')
  .directive('entryListing', function ($mdMedia) {
    return {
      templateUrl: '../../views/directives/entry-listing.html',
      restrict: 'E',
        replace: true,
        scope: {
            rawData: '='
        },
      link: function postLink(scope, element, attrs) {
          var rawData = scope.rawData;
          var numberOfColumns;

          scope.$watch(function() { return $mdMedia('(min-width: 2100px)')}, function (isExtraLargest) {
              if (rawData !== undefined && isExtraLargest) {
                  numberOfColumns = 5;
                  scope.content = rowize(rawData, numberOfColumns);
                  scope.flexSize = scope.content.length;
              }
          });

          scope.$watch(function() { return $mdMedia('(min-width: 1600px) and (max-width: 2100px'); }, function(isLargest) {
              if (rawData !== undefined && isLargest) {
                  numberOfColumns = 4;
                  scope.content = rowize(rawData, numberOfColumns);
                  scope.flexSize = scope.content.length;
              }
          });

          scope.$watch(function() { return $mdMedia('(min-width: 1100px) and (max-width: 1600px)'); }, function(isLarge) {
              if (rawData !== undefined && isLarge) {
                  numberOfColumns = 3;
                  scope.content = rowize(rawData, numberOfColumns);
                  scope.flexSize = scope.content.length;
              }
          });

          scope.$watch(function() { return $mdMedia('(min-width: 600px) and (max-width: 1100px)'); }, function(isMedium) {
              if (rawData !== undefined && isMedium) {
                  numberOfColumns = 2;
                  scope.content = rowize(rawData, numberOfColumns);
                  scope.flexSize = scope.content.length;
              }

          });

          scope.$watch(function() { return $mdMedia('sm'); }, function(isSmallest) {
              if (rawData !== undefined && isSmallest) {
                  numberOfColumns = 1;
                  scope.content = rowize(rawData, numberOfColumns);
                  scope.flexSize = scope.content.length;
              }
          });


          function rowize(arr, size) {
              var newArr = [];
              for (var i=0; i<size; i++) {
                  newArr[i] = [];
              }

              for (var i=0; i<arr.length; i++) {
                  var rowId = i % size;
                  newArr[rowId].push(arr[i]);
              }
              return newArr;
          }
      }
    };
  });

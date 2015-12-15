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
      link: function postLink(scope) {
          var rawData = scope.rawData;
          var numberOfColumns;
          scope.oneColumnData = [];
          scope.twoColumnData = [];
          scope.threeColumnData = [];

          scope.$watch(function() { return $mdMedia('min-width: 1400px'); }, function(isLarge) {
              if (rawData !== undefined && isLarge) {
                  numberOfColumns = 3;
                  scope.threeColumnData = rowize(rawData, numberOfColumns);
                  scope.twoColumnData = [];
                  scope.oneColumnData = [];
              }
          });

          scope.$watch(function() { return $mdMedia('(min-width: 600px) and (max-width: 1400px)'); }, function(isMedium) {
              if (rawData !== undefined && isMedium) {
                  numberOfColumns = 2;
                  scope.threeColumnData = [];
                  scope.twoColumnData = rowize(rawData, numberOfColumns);
                  scope.oneColumnData = [];
              }

          });

          scope.$watch(function() { return $mdMedia('max-width: 600px'); }, function(isSmallest) {
              if (rawData !== undefined && isSmallest) {
                  numberOfColumns = 1;
                  scope.threeColumnData = [];
                  scope.twoColumnData = [];
                  scope.oneColumnData = rowize(rawData, numberOfColumns);
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

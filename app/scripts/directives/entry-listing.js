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
          scope.threeColumnData = rowize(rawData, 3);
          scope.twoColumnData = rowize(rawData, 2);
          scope.oneColumnData = rowize(rawData, 1);

          scope.$watch(function() { return $mdMedia('(min-width: 2100px)')}, function (isExtraLargest) {
              if (rawData !== undefined && isExtraLargest) {
                  numberOfColumns = 5;
                  scope.content = rowize(rawData, numberOfColumns);
              }
          });

          scope.$watch(function() { return $mdMedia('(min-width: 1600px) and (max-width: 2100px'); }, function(isLargest) {
              if (rawData !== undefined && isLargest) {
                  numberOfColumns = 4;
                  scope.content = rowize(rawData, numberOfColumns);
              }
          });

          scope.$watch(function() { return $mdMedia('(min-width: 1100px) and (max-width: 1600px)'); }, function(isLarge) {
              if (rawData !== undefined && isLarge) {
                  numberOfColumns = 3;
                  scope.show3 = true;
                  scope.show2 = false;
                  scope.show1 = false;
              }
          });

          scope.$watch(function() { return $mdMedia('(min-width: 600px) and (max-width: 1100px)'); }, function(isMedium) {
              if (rawData !== undefined && isMedium) {
                  scope.show3 = false;
                  scope.show2 = true;
                  scope.show1 = false;
              }

          });

          scope.$watch(function() { return $mdMedia('sm'); }, function(isSmallest) {
              if (rawData !== undefined && isSmallest) {
                  scope.show3 = false;
                  scope.show2 = false;
                  scope.show1 = true;
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

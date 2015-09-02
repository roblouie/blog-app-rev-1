'use strict';

angular.module('blogApp')
  .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, DataService, DataPrepService, ColumnSize, $mdMedia) {
        $scope.toggleLeft = buildToggler('left');
        $scope.$mdMedia = $mdMedia;

        var numberOfColumns = ColumnSize;
        var rawData;
        //if ($mdMedia('gt-xl')) numberOfColumns = 4;
        //if ($mdMedia('(min-width: 1200px) and (max-width: 2000px')) numberOfColumns = 3;
        //if ($mdMedia('md') || $mdMedia('lg')) numberOfColumns = 2;
        //if ($mdMedia('sm')) numberOfColumns = 1;

        rawData = DataPrepService.data;
        $scope.content = rowize(rawData, numberOfColumns);
        $scope.flexSize = $scope.content.length;

        //DataService.getPaginatedEntries(10, 1).then(function(response) {
        //            rawData = response.data;
        //            $scope.content = rowize(rawData, numberOfColumns);
        //        });

        $scope.$watch(function() { return $mdMedia('gt-xl')}, function (isExtraLargest) {
            if (rawData !== undefined && isExtraLargest) {
                numberOfColumns = 4;
                $scope.content = rowize(rawData, numberOfColumns);
                $scope.flexSize = $scope.content.length;

            }
        });

        $scope.$watch(function() { return $mdMedia('(min-width: 1200px) and (max-width: 2000px'); }, function(isLargest) {
            if (rawData !== undefined && isLargest) {
                numberOfColumns = 3;
                $scope.content = rowize(rawData, numberOfColumns);
                $scope.flexSize = $scope.content.length;
            }
        });

        $scope.$watch(function() { return $mdMedia('lg'); }, function(isLarge) {
            if (rawData !== undefined && isLarge) {
                numberOfColumns = 2;
                $scope.content = rowize(rawData, numberOfColumns);
                $scope.flexSize = $scope.content.length;
            }
        });

        $scope.$watch(function() { return $mdMedia('md'); }, function(isMedium) {
            if (rawData !== undefined && isMedium) {
                numberOfColumns = 2;
                $scope.content = rowize(rawData, numberOfColumns);
                $scope.flexSize = $scope.content.length;
            }

        });

        $scope.$watch(function() { return $mdMedia('sm'); }, function(isSmallest) {
            if (rawData !== undefined && isSmallest) {
                numberOfColumns = 1;
                $scope.content = rowize(rawData, numberOfColumns);
                $scope.flexSize = $scope.content.length;
            }
        });

                $scope.remove = function() {
                    $scope.content.splice(0,1);
                };

                //setInterval(function () {
                //    DataService.getPaginatedEntries(3, 1).then(function(response) {
                //        $scope.content.push(response.data[0]);
                //    });
                //}, 3000);



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


                /**
                 * Build handler to open/close a SideNav; when animation finishes
                 * report completion in console
                 */
                function buildToggler(navID) {
                    var debounceFn =  $mdUtil.debounce(function(){
                        $mdSidenav(navID)
                            .toggle()
                            .then(function () {
                                $log.debug("toggle " + navID + " is done");
                            });
                    },200);
                    return debounceFn;
                }
            })

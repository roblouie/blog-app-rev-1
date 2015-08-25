'use strict';

angular.module('blogApp')
  .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, DataService, $mdMedia) {
                $scope.toggleLeft = buildToggler('left');
        $scope.$mdMedia = $mdMedia;

        var numberOfColumns = 1;
        var rawData;
        if ($mdMedia('gt-lg')) numberOfColumns = 3;
        if ($mdMedia('md') || $mdMedia('lg')) numberOfColumns = 2;
        if ($mdMedia('sm')) numberOfColumns = 1;

        //$('.grid').isotope({
        //    // options
        //    itemSelector: '.grid-item',
        //    layoutMode: 'fitRows'
        //});

        DataService.getPaginatedEntries(3, 1).then(function(response) {
                    rawData = response.data;
                rawData.push({ID: '100', title: 'Heres a title'});
            rawData.push({ID: '101', title: 'Heres a title'});
            rawData.push({ID: '102', title: 'Heres a title'});
                    $scope.content = rowize(rawData, numberOfColumns);
                });

        $scope.$watch(function() { return $mdMedia('gt-lg'); }, function(isLargest) {
            if (rawData !== undefined && isLargest) {
                numberOfColumns = 3;
                $scope.content = rowize(rawData, numberOfColumns);
            }
        });

        $scope.$watch(function() { return $mdMedia('lg'); }, function(isLarge) {
            if (rawData !== undefined && isLarge) {
                numberOfColumns = 2;
                $scope.content = rowize(rawData, numberOfColumns);
            }
        });

        $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(isMedium) {
            if (rawData !== undefined && isMedium) {
                numberOfColumns = 2;
                $scope.content = rowize(rawData, numberOfColumns);
            }

        });

        $scope.$watch(function() { return $mdMedia('sm'); }, function(isSmallest) {
            if (rawData !== undefined && isSmallest) {
                numberOfColumns = 1;
                $scope.content = rowize(rawData, numberOfColumns);
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
            for (var i=0; i<arr.length; i++) {
                var rowId = i % size;
                newArr[rowId] = newArr[rowId] || [];
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
            .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
                $scope.close = function () {
                    $mdSidenav('left').close()
                        .then(function () {
                            $log.debug("close LEFT is done");
                        });
                };
            })

'use strict';

angular.module('blogApp')
  .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, DataService, $mdMedia) {
                $scope.toggleLeft = buildToggler('left');
        $scope.$mdMedia = $mdMedia;

        DataService.getPaginatedEntries(3, 1).then(function(response) {
                    $scope.content = response.data;
                    $scope.content.push({ID: '100', title: 'Heres a title'});
                    $scope.content.push({ID: '101', title: 'Heres a title'});
                    $scope.content.push({ID: '102', title: 'Heres a title'});
                });

                $scope.remove = function() {
                    $scope.content.splice(0,1);
                };

                //setInterval(function () {
                //    DataService.getPaginatedEntries(3, 1).then(function(response) {
                //        $scope.content.push(response.data[0]);
                //    });
                //}, 3000);

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

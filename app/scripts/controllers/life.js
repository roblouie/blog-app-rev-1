'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:LifeCtrl
 * @description
 * # LifeCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('LifeCtrl', function (DataPrepService, loadingSpinnerService) {
        loadingSpinnerService.hideLoader();
        this.rawData = DataPrepService.data;
  });

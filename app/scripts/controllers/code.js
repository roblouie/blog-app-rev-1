'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:CodeCtrl
 * @description
 * # CodeCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('CodeCtrl', function (DataPrepService, loadingSpinnerService) {
        loadingSpinnerService.hideLoader();
        this.rawData = DataPrepService.data;
  });

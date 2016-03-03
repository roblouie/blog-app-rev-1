'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:CodeCtrl
 * @description
 * # CodeCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('CodeCtrl', function (DataPrepService, loadingSpinnerService, metaService) {
    document.title = 'Rob Louie - Coding';
    metaService.setMetaContent("Coding related articles.");
    loadingSpinnerService.hideLoader();
    this.rawData = DataPrepService.data;
  });

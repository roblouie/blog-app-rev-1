'use strict';

angular.module('blogApp')
  .controller('LifeCtrl', function (DataPrepService, loadingSpinnerService, metaService) {
    document.title = 'Rob Louie - Life';
    metaService.setMetaContent("Life related articles.");
    loadingSpinnerService.hideLoader();
    this.rawData = DataPrepService.data;
  });

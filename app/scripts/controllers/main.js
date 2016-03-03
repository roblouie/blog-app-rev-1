'use strict';

angular.module('blogApp')
    .controller('MainCtrl', function (DataPrepService, loadingSpinnerService, metaService) {
      document.title = 'Rob Louie - Coding // Life';
      metaService.setMetaContent("A blog about software development.");
      loadingSpinnerService.hideLoader();
      this.rawData = DataPrepService.data;
    });

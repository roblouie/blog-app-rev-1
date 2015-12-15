'use strict';

angular.module('blogApp')
    .controller('MainCtrl', function (DataPrepService, loadingSpinnerService) {
        loadingSpinnerService.hideLoader();
        this.rawData = DataPrepService.data;
    });

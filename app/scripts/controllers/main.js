'use strict';

angular.module('blogApp')
    .controller('MainCtrl', function (DataPrepService) {
        this.rawData = DataPrepService.data;
    });

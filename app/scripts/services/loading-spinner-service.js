'use strict';

/**
 * @ngdoc service
 * @name blogApp.loadingSpinnerService
 * @description
 * # loadingSpinnerService
 * Service in the blogApp.
 */
angular.module('blogApp')
  .factory('loadingSpinnerService', function () {
    var toggleObject;

    return {
      showLoader: showLoader,
      hideLoader: hideLoader,
      setVisibilityToggle: setVisibilityToggle
    };

    function showLoader() {
      toggleObject.show = true;
    }

    function hideLoader() {
      toggleObject.show = false;
    }

    function setVisibilityToggle(directiveLoadToggleObject) {
      toggleObject = directiveLoadToggleObject;
    }
  });

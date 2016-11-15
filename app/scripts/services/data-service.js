'use strict';

angular.module('blogApp')
    .factory('DataService', function DataService($http, loadingSpinnerService) {
        return {
            getPaginatedEntries: getPaginatedEntries,
            getLifeEntries: getLifeEntries,
            getCodeEntries: getCodeEntries,
            getEntry: getEntry
        };

        function getPaginatedEntries(itemsPerPage, pageNumber) {
            loadingSpinnerService.showLoader();
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts?filter[posts_per_page]=' + itemsPerPage + '&page=' + pageNumber + '&fields=ID,title,excerpt,featured_image,date,slug');
        }

        function getLifeEntries(itemsPerPage, pageNumber) {
            loadingSpinnerService.showLoader();
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts?filter[posts_per_page]=' + itemsPerPage + '&page=' + pageNumber + '&fields=ID,title,excerpt,featured_image,date,slug&filter[category_name]=life');
        }

        function getCodeEntries(itemsPerPage, pageNumber) {
            loadingSpinnerService.showLoader();
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts?filter[posts_per_page]=' + itemsPerPage + '&page=' + pageNumber + '&fields=ID,title,excerpt,featured_image,date,slug&filter[category_name]=code');
        }

        function getEntry(id) {
            loadingSpinnerService.showLoader();
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts/' + id);
        }
});

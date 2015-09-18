'use strict';

angular.module('blogApp')
    .factory('DataService', function DataService($http) {
        return {
            getPaginatedEntries: getPaginatedEntries,
            getLifeEntries: getLifeEntries,
            getCodeEntries: getCodeEntries,
            getEntry: getEntry
        };

        function getPaginatedEntries(itemsPerPage, pageNumber) {
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts?filter[posts_per_page]=' + itemsPerPage + '&page=' + pageNumber + '&fields=ID,title,excerpt,featured_image,date,slug&custom_fields=colspan,rowspan');
        }

        function getLifeEntries(itemsPerPage, pageNumber) {
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts?filter[posts_per_page]=' + itemsPerPage + '&page=' + pageNumber + '&fields=ID,title,excerpt,featured_image,date,slug&custom_fields=colspan,rowspan&filter[category_name]=life');
        }

        function getCodeEntries(itemsPerPage, pageNumber) {
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts?filter[posts_per_page]=' + itemsPerPage + '&page=' + pageNumber + '&fields=ID,title,excerpt,featured_image,date,slug&custom_fields=colspan,rowspan&filter[category_name]=code');
        }

        function getEntry(id) {
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts/' + id);
        }
});

'use strict';

angular.module('blogApp')
    .factory('DataService', function DataService($http) {
        return {
            getPaginatedEntries: getPaginatedEntries,
            getEntry: getEntry
        };

        function getPaginatedEntries(itemsPerPage, pageNumber) {
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts?filter[posts_per_page]=' + itemsPerPage + '&page=' + pageNumber + '&fields=ID,title,excerpt,featured_image,date&custom_fields=colspan,rowspan');
        }

        function getEntry(id) {
            return $http.get('http://www.roblouie.com/blogengine/wp-json/posts/' + id);
        }
});

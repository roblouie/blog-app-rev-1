'use strict';

angular.module('blogApp')
  .factory('metaService', function () {
    var scope = {};

    return {
      setScope: setScope,
      setMetaContent: setMetaContent
    };

    function setScope(directiveScope) {
      scope = directiveScope;
    }

    function setMetaContent(content) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = content;
      scope.content = tmp.textContent || tmp.innerText || "";
      scope.content = scope.content.replace(/\u00a0/g, " ").replace(/(\r\n|\n|\r)/gm,"");
    }
  });

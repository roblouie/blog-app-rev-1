'use strict';

angular.module('blogApp')
  .directive('sharePost', function () {
    return {
      scope: {
        urlToShare: '@urlToShare',
        titleToShare: '@titleToShare',
        entryToShare: '=entryToShare'
      },
      templateUrl: '../../views/directives/share-post.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var imageUrl = scope.entryToShare.featured_image ? scope.entryToShare.featured_image.source : '';
        scope.shareFacebook = function() {
          FB.ui({
            method: 'feed',
            link: scope.urlToShare,
            picture: imageUrl,
            name: scope.entryToShare.title,
            description: getTextFromExcerptHtml(scope.entryToShare.excerpt)
          }, function(response){});
        };

        scope.shareLinkedIn = function() {
          openInWindow("//www.linkedin.com/shareArticle?mini=true&url=" + scope.urlToShare + "&title=" + scope.entryToShare.title + "&summary=" + getTextFromExcerptHtml(scope.entryToShare.excerpt), 400, 400);
        };

        scope.shareTwitter = function() {
          openInWindow('http://twitter.com/share', 440, 253);

        };
        function openInWindow(url, winWidth, winHeight) {
          var winTop = (screen.height / 2) - (winHeight / 2);
          var winLeft = (screen.width / 2) - (winWidth / 2);
          window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=' + winHeight + ',width=' + winWidth + ',top=' + winTop + ',left=' + winLeft);
        }

        function getTextFromExcerptHtml(exerptHtml) {
          var tmp = document.createElement("DIV");
          tmp.innerHTML = exerptHtml;
          var excerpt = tmp.textContent || tmp.innerText || "";
          excerpt = excerpt.replace(/\u00a0/g, " ").replace(/(\r\n|\n|\r)/gm,"");
          return excerpt;
        }
      }
    };
  });

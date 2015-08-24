'use strict';

describe('Filter: titleUrl', function () {

  // load the filter's module
  beforeEach(module('blogApp'));

  // initialize a new instance of the filter before each test
  var titleUrl;
  beforeEach(inject(function ($filter) {
    titleUrl = $filter('titleUrl');
  }));

  it('should return the input prefixed with "titleUrl filter:"', function () {
    var text = 'angularjs';
    expect(titleUrl(text)).toBe('titleUrl filter: ' + text);
  });

});

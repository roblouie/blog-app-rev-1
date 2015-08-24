'use strict';

describe('Filter: scaledImagePath', function () {

  // load the filter's module
  beforeEach(module('blogApp'));

  // initialize a new instance of the filter before each test
  var scaledImagePath;
  beforeEach(inject(function ($filter) {
    scaledImagePath = $filter('scaledImagePath');
  }));

  it('should return the input prefixed with "scaledImagePath filter:"', function () {
    var text = 'angularjs';
    expect(scaledImagePath(text)).toBe('scaledImagePath filter: ' + text);
  });

});

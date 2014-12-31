'use strict';

var angular = require('angular');

describe("vTime", function() {

  var $filter;
  beforeEach(angular.mock.module(require('../src')));

  beforeEach(angular.mock.inject(function(_$filter_) {
    $filter = _$filter_;
  }));

  it('should have a vTime filter', function() {
    expect($filter('vTime')).not.to.equal(null);
  });

  it('should convert < 60 seconds to m:ss', function() {
    var time = $filter('vTime')(55);
    expect(time).to.equal("0:55");
  });

  it('should convert 60 - 599 seconds to m:ss', function() {
    var time60 = $filter('vTime')(60);
    var time590 = $filter('vTime')(599);

    expect(time60).to.equal("1:00");
    expect(time590).to.equal("9:59");
  });

  it('should convert 600 - 3599 seconds to mm:ss', function() {
    var time600 = $filter('vTime')(600);
    var time3599 = $filter('vTime')(3599);

    expect(time600).to.equal("10:00");
    expect(time3599).to.equal("59:59");
  });

  it('should convert 3600+ seconds to h:mm:ss', function() {
    var time3600 = $filter('vTime')(3600);
    var time9001 = $filter('vTime')(9001);

    expect(time3600).to.equal("1:00:00");
    expect(time9001).to.equal("2:30:01");
  });

  it('should accept floating points', function() {
    var time = $filter('vTime')(10.05);
    expect(time).to.equal("0:10");
  });

});

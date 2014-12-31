'use strict';

module.exports = function() {
  return function(input) {
    input = Math.floor(input);

    //Less than an hour
    if (input < 3600) {
      var minutes = Math.floor(input / 60);
      var seconds = input - (minutes * 60);
      return minutes + ":" + ("0" + seconds).slice(-2);
    }
    //one hour or more
    else {
      var hours = Math.floor(input / 3600);
      var minutes = Math.floor((input - (hours * 3600)) / 60);
      var seconds = input - (hours * 3600) - (minutes * 60);
      return hours + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }
  };
};

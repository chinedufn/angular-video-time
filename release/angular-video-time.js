(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

module.exports = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null)
.module('video-time', [])
.filter('vTime', require('./video-time'))
.name;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./video-time":2}],2:[function(require,module,exports){
'use strict';

module.exports = function() {
  return function(input) {

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

},{}]},{},[2,1]);

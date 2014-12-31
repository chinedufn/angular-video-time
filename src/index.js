'use strict';

module.exports = require('angular')
.module('video-time', [])
.filter('vTime', require('./video-time'))
.name;

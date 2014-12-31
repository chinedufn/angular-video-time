'use strict';

module.exports = require('angular')
.module('video-time', [])
.filter('video-time', require('./video-time'))
.name;

angular-video-time
==================

AngularJS filter that converts from seconds to a video-friendly display time

## Installation

```bash
npm install angular-video-time
```

## Usage

```js
// Add 'video-time' to your module's dependencies
require(‘angular-video-time’);
angular.module('myApp', ['video-time']);

//later in your html
{{0 | vTime}} <!-- "0:00" -->
{{0.9 | vTime}} <!-- "0:00" -->

{{61.5 | vTime}} <!-- "1:01" -->

{{3599 | vTime}} <!-- "59:59" -->

{{9001 | vTime}} <!-- "2:30:01" -->
{{9001.999 | vTime}} <!-- "2:30:01" -->
{{9002 | vTime}} <!-- "2:30:02" -->

{{videoPlayer.currentTime || vTime}} <!-- "13:37" -->
```

## To test

```bash
npm test
```

angular-video-time
==================

Angular filter that converts from seconds to a video-friendly display time. See the Usage section for examples

## Installation

```bash
#using npm
npm install angular-video-time

#using bower
bower install angular-video-time
```

## Usage

```js
//add 'video-time' to your module's dependencies
angular.module('myApp', ['video-time']);

//later in your html
{{0 | vTime}} <!-- "0:00" -->
{{0.9 | vTime}} <!-- "0:00" -->

{{61.5 | vTime}} <!-- "1:01" -->

{{3599 | vTime}} <!-- "59:59" -->

{{9001 | vTime}} <!-- "2:30:01" -->
{{9001.999 | vTime}} <!-- "2:30:01" -->
{{9002 | vTime}} <!-- "2:30:02" -->
```

## To test

```bash
npm test
```

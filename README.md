angular-video-time
==================

Angular filter that converts seconds to a video-friendly display time

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
{{9001 | vTime}} <!-- "2:30:01" -->
```

## To test

```bash
npm test
```

# bespoke-leapmotion

The Leap Motion plugin lets you utilize your [Leap Motion](https://www.leapmotion.com/) device to control basic navigation of your [bespoke.js](https://github.com/markdalgleish/bespoke.js) presentation.

## Download

Download the [production version][min] or the [development version][max], or use a package manager.

[min]: https://raw.github.com/aleung/bespoke-leapmotion/master/dist/bespoke-leapmotion.min.js
[max]: https://raw.github.com/aleung/bespoke-leapmotion/master/dist/bespoke-leapmotion.js

#### Package Manager

npm

```
$ npm install bespoke-leapmotion
```

Bower

```
$ bower install bespoke-leapmotion
```

## Usage

This plugin is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

``` javascript
var bespoke = require('bespoke'),
    leapmotion = require('bespoke-leapmotion');

bespoke.from('article', [
  leapmotion()
}];
```

When using browser globals:

``` javascript
bespoke.from('article', [
  bespoke.plugins.leapmotion()
}];
```

## Credits

Inspired by [reveal.js-leap-motion](https://github.com/gneatgeek/reveal.js-leap-motion).

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://aleung.mit-license.org/)

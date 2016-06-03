# vue-spinner

A collection of loading spinners with Vue.js. Just convert yuanyan's React.js project [Halogen](https://github.com/yuanyan/halogen) to Vue.js components. Special thanks to [yuanyan](https://github.com/yuanyan) for the wonderful project.

## [Live demo](http://greyby.github.io/vue-spinner/)

## Installation

### NPM
```bash
$ npm install vue-spinner
```

### CommonJS
```js
var PulseLoader = require('vue-spinner/src/PulseLoader.vue');

new Vue({
  components: {
    'PulseLoader': PulseLoader
  }
})
```

### ES6
```js
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

new Vue({
  components: {
    PulseLoader
  }
})
```

### For browserify
If you use browserify + vueify, you may need to import vue-spinner like this:

```js
var PulseLoader= require('vue-spinner/dist/vue-spinner.min').PulseLoader;
```

```js
import { PulseLoader } from 'vue-spinner/dist/vue-spinner.min.js'
```

[explain here](https://github.com/greyby/vue-spinner/issues/2)

### Browser globals
The `dist` folder contains `vue-spinner.js` and `vue-spinner.min.js` with all components exported in the <code>window.VueSpinner</code> object. These bundles are also available on NPM packages.

```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-spinner.js"></script>
<script>
  var PulseLoader = VueStrap.PulseLoader
</script>
```

## Local setup

```
npm install
npm run dev
```

## Usage

```html
<pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
<grid-loader :loading="loading" :color="color" :size="size"></grid-loader>
<clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
<rise-loader :loading="loading" :color="color" :size="size"></rise-loader>
<beat-loader :loading="loading" :color="color" :size="size"></beat-loader>
<sync-loader :loading="loading" :color="color" :size="size"></sync-loader>
<rotate-loader :loading="loading" :color="color" :size="size"></rotate-loader>
<fade-loader :loading="loading" :color="color" :height="height" :width="width"></fade-loader>
<pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader>
<square-loader :loading="loading" :color="color" :size="size"></square-loader>
<scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
<skew-loader :loading="loading" :color="color" :size="size"></skew-loader>
<moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
<ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
<bounce-loader :loading="loading" :color="color" :size="size"></bounce-loader>          
<dot-loader :loading="loading" :color="color" :size="size"></dot-loader>
```

You can customize the color and size with setting the props. All props have default value. You can control the spinner show/hidden with setting the loading prop.

## TODO



## License

 vue-spinner is licensed under [The MIT License](LICENSE).
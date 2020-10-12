# Installation

## NPM

	npm install vue-grid-layout --save
    
## Yarn

    yarn add vue-grid-layout


Import the library

```javascript
    import VueGridLayout from 'vue-grid-layout';
```

Add to other Vue components 

 ```javascript
    export default {
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        },
    // ... data, methods, mounted (), etc.
    }
    
```    

## browser

Include the browser-ready bundle (download from [releases](https://github.com/jbaysolutions/vue-grid-layout/releases)) in your page. The components will be automatically available.

```html
    <script src="vue-grid-layout.umd.min.js"></script>
```


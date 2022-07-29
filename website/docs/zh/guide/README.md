# 安装

## NPM

	npm install vue-grid-layout --save
    
## Yarn

    yarn add vue-grid-layout


导入库

```javascript
    import VueGridLayout from 'vue-grid-layout';
```

添加到其他Vue组件

 ```javascript
    export default {
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        },
    // ... data, methods, mounted (), etc.
    }
    
```

## 浏览器

包括可用于浏览器的软件包（[从发布版本](https://github.com/jbaysolutions/vue-grid-layout/releases)下载）。组件将自动可用。

```html
    <script src="vue-grid-layout.umd.min.js"></script>
```


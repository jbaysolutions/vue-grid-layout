# 样式

可以定制栅格样式以适合您的需求。以下是可以覆盖的类的列表。

## 占位符 
  
占位符的默认css为：

````css
.vue-grid-item.vue-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}  
````
  
您可以使用`!important`规则覆盖属性：
  
````css
.vue-grid-item.vue-grid-placeholder {
    background: green !important;
}
````

或者通过用更[具体的](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)方式包装栅格类：

````css
.container .vue-grid-item.vue-grid-placeholder {
    background: green;
}
````

在此示例中，我们将占位符的背景色更改为绿色：

[查看资料](https://github.com/jbaysolutions/vue-grid-layout/blob/master/website/docs/.vuepress/components/ExampleStylingPlaceholder.vue)

<ClientOnly>
<ExampleStylingPlaceholder></ExampleStylingPlaceholder>
</ClientOnly>


工作正在进行中...

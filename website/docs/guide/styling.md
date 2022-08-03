# Styling

Grid styling can be customized to fit your needs. Below is a list of the classes you can override.

## Placeholder 
  
The default css for the placeholder is:

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
  
You can override the properties using the !important rule:  
  
````css
.vue-grid-item.vue-grid-placeholder {
    background: green !important;
}
````

Or by wrapping your grid with a more [specific](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) class:

````css
.container .vue-grid-item.vue-grid-placeholder {
    background: green;
}
````

In this example we change the placeholder background color to green:

[View source](https://github.com/jbaysolutions/vue-grid-layout/blob/master/website/docs/.vuepress/components/ExampleStylingPlaceholder.vue)

<ClientOnly>
<ExampleStylingPlaceholder></ExampleStylingPlaceholder>
</ClientOnly>


## Grid lines
     
To add grid lines to the layout, add the ``grid`` class to the grid-layout element and use the css:

````css
.grid::before {
    content: '';
    background-size: calc(calc(100% - 12px) / 12) 112px;
    background-image: linear-gradient(
            to right,
            lightgrey 1px,
            transparent 1px
    ),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
    height: 100%;
    width: 100%;
    position: absolute;
    background-repeat: repeat;
    margin: 6px;
}
````

CSS calculations for grid lines: 

* background size: calc(calc(100% - margin) / colNum) rowHeight + margin;
* margin: margin / 2

<ClientOnly>
<ExampleStylingGridLines></ExampleStylingGridLines>
</ClientOnly>



Work in progress...

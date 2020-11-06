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


Work in progress...

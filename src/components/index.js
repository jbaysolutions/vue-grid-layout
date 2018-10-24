import Vue from "vue";
import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';


const VueGridLayout = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}

// module.exports = VueGridLayout;

Object.keys(VueGridLayout).forEach(name => {
    Vue.component(name, VueGridLayout[name]);
});

export default VueGridLayout;
export { GridLayout, GridItem };
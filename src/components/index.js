import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const VueGridLayout = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}

export default {
  install(app) {
    Object.keys(VueGridLayout).forEach(name => {
      app.component(name, VueGridLayout[name]);
    });
  }
};

export { GridLayout, GridItem };

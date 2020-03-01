import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';


const VueGridLayout = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}

// module.exports = VueGridLayout;

const install = function(Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(VueGridLayout).forEach(key => {
        Vue.component(key, VueGridLayout[key]);
    });
};

const plugin = {
    ...VueGridLayout,
    install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default plugin;
export { GridLayout, GridItem };
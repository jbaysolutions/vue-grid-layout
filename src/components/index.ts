import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const VueGridLayout = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}

export function install(Vue) {
    // @ts-ignore
    if (install.installed) return;
    // @ts-ignore
    install.installed = true;
    Object.keys(VueGridLayout).forEach(name => {
        // @ts-ignore
        Vue.component(name, VueGridLayout[name]);
    });
}

const plugin = {
    install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default VueGridLayout;
export { GridLayout, GridItem };

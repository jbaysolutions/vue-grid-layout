import { App } from 'vue';

import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';

export { GridLayout, GridItem };

const install = (app: App) => {
    app.component('grid-layout', GridLayout)
    app.component('grid-item', GridItem)
}
install.GridItem = GridItem;
install.GridLayout = GridLayout;

export default install;
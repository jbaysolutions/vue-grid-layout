import { shallowMount } from '@vue/test-utils'
import GridLayout from '../../src/components/GridLayout.vue'

let layout

describe('GridLayout test', () => {
    beforeAll(()=>{
        let testLayout = [{"x":0,"y":0,"w":2,"h":2,"i":"0", resizable: true, draggable: true, static: false, minY: 0, maxY: 2}];
        layout = JSON.parse(JSON.stringify(testLayout))
    })
    
    describe('Interface test', () => {
        it('should render correct contents', () => {
            const wrapper = shallowMount(GridLayout, {
                propsData: {
                    layout: layout
                }   
            })
            const grid = wrapper.findAll('.vue-grid-layout');
            expect(grid.selector).toEqual('.vue-grid-layout');
        })
    })
})

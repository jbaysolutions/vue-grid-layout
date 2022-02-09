<template>
    <div class="resize-drag">
        whatever
    </div>
</template>

<script>
import '@interactjs/auto-start'
import '@interactjs/actions/drag'
import '@interactjs/actions/resize'
import '@interactjs/modifiers'
import '@interactjs/dev-tools'
import interact from '@interactjs/interact'

export default {
    name: "InteractTester",
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    mounted() {
        const self = this;
        const interactObj = interact('.resize-drag')
            .resizable({
                // resize from all edges and corners
                edges: { left: true, right: true, bottom: true, top: true },

/*
                listeners: {
                    move (event) {
                        self.handleResize(event)
                    }
                },
*/
                modifiers: [
                    // keep the edges inside the parent
                    interact.modifiers.restrictEdges({
                        outer: 'parent'
                    }),

                    // minimum size
                    interact.modifiers.restrictSize({
                        min: { width: 100, height: 50 }
                    })
                ],

                inertia: true
            })
            .draggable({
                listeners: { move: window.dragMoveListener },
                inertia: true,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ]
            })
        interactObj
            .on('resizestart resizemove resizeend', function (event) {
                self.handleResize(event);
            });
    },
    methods: {
        handleResize(event) {
            const self = this
            var target = event.target

            // update the element's style
            target.style.width = event.rect.width + 'px'
            target.style.height = event.rect.height + 'px'

            // translate when resizing from top or left edges
            self.x += event.deltaRect.left
            self.y += event.deltaRect.top

            target.style.transform = 'translate(' + self.x + 'px,' + self.y + 'px)'

            target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)

        }
    }
}
</script>

<style scoped>
.resize-drag {
    width: 120px;
    border-radius: 8px;
    padding: 20px;
    margin: 1rem;
    background-color: #29e;
    color: white;
    font-size: 20px;
    font-family: sans-serif;

    touch-action: none;

    /* This makes things *much* easier */
    box-sizing: border-box;
}
</style>

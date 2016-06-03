/*
Vue.config.debug = true // turn on debugging mode
var MoonLoader = VueSpinner.MoonLoader

new Vue({
    el: '#app',
    components: {
        MoonLoader,
    },
    data () {
        return {
            color: '#3AB982',
            height: '35px',
            width: '4px',
            margin: '2px',
            radius: '2px'
        }
    },
    ready: function() {
        console.log("############# WAAAAAAAAAAAAAAAA");
    }
});*/


Vue.config.debug = true;
Vue.config.devtools = true;

var gridComponent = Vue.extend({
    template: "#gridTemplate",
    props: {
        autoSize: {
            type: Boolean,
            default: true
        },
        cols: {
            type: Number,
            default: 12
        },
        rowHeight: {
            type: Number,
            default: 150
        },
        maxRows: {
            type: Number,
            default: Infinity
        },
        margin: {
            type: Array,
            default: function () { return [10, 10]; }
        },
        isDraggable: {
            type: Boolean,
            default: true
        },
        isResizable: {
            type: Boolean,
            default: true
        },
        useCssTransforms: {
            type: Boolean,
            default: true
        },
        verticalCompact: {
            type: Boolean,
            default: true
        },

        layouts: []
    },
    data: function() {
        return {
            width: 100
        };
    },
    ready() {
        console.log("##### READYYYY!");
        this.$nextTick(function() {
            this.width = this.$el.offsetWidth;
        });
    },
    computed: {
        mergedStyle: function() {
            return "height: " + this.containerHeight() + ";";
        }
    },
    methods: {
        containerHeight: function() {
            if (!this.autoSize) return;
            return bottom(this.layouts) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
        }
    }
});
Vue.component('grid', gridComponent);


var gridItemComponent = Vue.extend({
    template: "#gridItemTemplate",
    props: {
        cols: {
            type: Number,
            required: true
        },
        containerWidth: {
            type: Number,
            required: true
        },
        rowHeight: {
            type: Number,
            required: true
        },
        margin: {
            type: Array,
            required: true
        },
        maxRows: {
            type: Number,
            required: true
        },
        minH: {
            type: Number,
            required: false,
            default: 1
        },
        minW: {
            type: Number,
            required: false,
            default: 1
        },
        maxH: {
            type: Number,
            required: false,
            default: Infinity
        },
        maxW: {
            type: Number,
            required: false,
            default: Infinity
        },
        isDraggable: {
            type: Boolean,
            required: true
        },
        isResizable: {
            type: Boolean,
            required: true
        },
        useCssTransforms: {
            type: Boolean,
            required: true
        },
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        },
        w: {
            type: Number,
            required: true
        },
        h: {
            type: Number,
            required: true
        },
        i: {
            default: ""
        }
    },
    watch: {
    },
    ready: function() {
        //this.pos = this.calcPosition();
    },
    computed: {
        createStyle: function() {
            var pos = this.calcPosition();
            //const {usePercentages, containerWidth, useCssTransforms} = this.props;

            let style;
            // CSS Transforms support (default)
            /*if (useCssTransforms) {
             style = setTransform(pos);
             }
             // top,left (slow)
             else {*/
            style = setTopLeft(pos.top, pos.left, pos.width, pos.height);

            // This is used for server rendering.
            /*if (usePercentages) {
             style.left = perc(pos.left / containerWidth);
             style.width = perc(pos.width / containerWidth);
             }*/
            //}

            return createMarkup(style);
        },
    },
    methods: {
        calcColWidth: function() {
            return (this.containerWidth - (this.margin[0] * (this.cols + 1))) / this.cols;
        },
        calcPosition: function() {
            const colWidth = this.calcColWidth();

            const out = {
                left: Math.round(colWidth * this.x + (this.x + 1) * this.margin[0]),
                top: Math.round(this.rowHeight * this.y + (this.y + 1) * this.margin[1]),
                // 0 * Infinity === NaN, which causes problems with resize constriants;
                // Fix this if it occurs.
                // Note we do it here rather than later because Math.round(Infinity) causes deopt
                width: this.w === Infinity ? this.w : Math.round(colWidth * this.w + Math.max(0, this.w - 1) * this.margin[0]),
                height: this.h === Infinity ? this.h : Math.round(this.rowHeight * this.h + Math.max(0, this.h - 1) * this.margin[1])
            };

            /*if (state && state.resizing) {
             out.width = Math.round(state.resizing.width);
             out.height = Math.round(state.resizing.height);
             }

             if (state && state.dragging) {
             out.top = Math.round(state.dragging.top);
             out.left = Math.round(state.dragging.left);
             }*/

            return out;
        },
    }
});
Vue.component('gridItem', gridItemComponent);


var testLayout = [
    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
    {"x":2,"y":0,"w":2,"h":4,"i":"1"},
    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
    {"x":6,"y":4,"w":2,"h":4,"i":"9"},
    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
    {"x":2,"y":6,"w":2,"h":2,"i":"19"}
];

new Vue({
    el: '#app',
    data: {
        // initialLayout: generateLayout()
        initialLayout: JSON.parse(JSON.stringify(testLayout)),
        layout: JSON.parse(JSON.stringify(testLayout))
    },
    ready: function () {
        this.layout = compact(this.layout, true);
    },
    watch: {
    },
    methods: {
    },
});


function generateLayout() {
    return _.map(_.range(0, 25), function (item, i) {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: _.random(0, 5) * 2 % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}



function setTopLeft(top, left, width, height) {
    return {
        top: top + "px",
        left: left + "px",
        width: width + "px",
        height: height + "px",
        position: 'absolute'
    };
}

/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */
function bottom(layout) {
    let max = 0, bottomY;
    for (let i = 0, len = layout.length; i < len; i++) {
        bottomY = layout[i].y + layout[i].h;
        if (bottomY > max) max = bottomY;
    }
    return max;
}


/**
 * Given two layoutitems, check if they collide.
 *
 * @return {Boolean}   True if colliding.
 */
function collides(l1, l2) {
    if (l1 === l2) return false; // same element
    if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2
    if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2
    if (l1.y + l1.h <= l2.y) return false; // l1 is above l2
    if (l1.y >= l2.y + l2.h) return false; // l1 is below l2
    return true; // boxes overlap
}

/**
 * Given a layout, compact it. This involves going down each y coordinate and removing gaps
 * between items.
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}       Compacted Layout.
 */
function compact(layout, verticalCompact) {
    // Statics go in the compareWith array right away so items flow around them.
    const compareWith = getStatics(layout);
    // We go through the items by row and column.
    const sorted = sortLayoutItemsByRowCol(layout);
    // Holding for new items.
    const out = new Array(layout.length);

    for (let i = 0, len = sorted.length; i < len; i++) {
        let l = sorted[i];

        // Don't move static elements
        if (!l.static) {
            l = compactItem(compareWith, l, verticalCompact);

            // Add to comparison array. We only collide with items before this one.
            // Statics are already in this array.
            compareWith.push(l);
        }

        // Add to output array to make sure they still come out in the right order.
        out[layout.indexOf(l)] = l;

        // Clear moved flag, if it exists.
        l.moved = false;
    }

    return out;
}


/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */
function getFirstCollision(layout, layoutItem) {
    for (let i = 0, len = layout.length; i < len; i++) {
        if (collides(layout[i], layoutItem)) return layout[i];
    }
}

function getAllCollisions(layout, layoutItem) {
    return layout.filter((l) => collides(l, layoutItem));
}

/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */
function getStatics(layout) {
    return layout.filter((l) => l.static);
}


/**
 * Compact an item in the layout.
 */
function compactItem(compareWith, l, verticalCompact) {
    if (verticalCompact) {
        // Move the element up as far as it can go without colliding.
        while (l.y > 0 && !getFirstCollision(compareWith, l)) {
            l.y--;
        }
    }

    // Move it down, and keep moving it down if it's colliding.
    let collides;
    while((collides = getFirstCollision(compareWith, l))) {
        l.y = collides.y + collides.h;
    }
    return l;
}


/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */
function sortLayoutItemsByRowCol(layout) {
    return [].concat(layout).sort(function(a, b) {
        if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
            return 1;
        }
        return -1;
    });
}


/**
 * Convert a JS object to CSS string. Similar to React's output of CSS.
 * @param obj
 * @returns {string}
 */
function createMarkup(obj) {
    var keys = Object.keys(obj);
    if (!keys.length) return '';
    var i, len = keys.length;
    var result = '';

    for (i = 0; i < len; i++) {
        var key = keys[i];
        var val = obj[key];
        result += hyphenate(key) + ':' + addPx(key, val) + ';';
    }

    return result;
}


/* The following list is defined in React's core */
var IS_UNITLESS = {
    animationIterationCount: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    stopOpacity: true,
    strokeDashoffset: true,
    strokeOpacity: true,
    strokeWidth: true
};


/**
 * Will add px to the end of style values which are Numbers.
 * @param name
 * @param value
 * @returns {*}
 */
function addPx(name, value) {
    if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
        return value + 'px';
    } else {
        return value;
    }
}


/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
    return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}
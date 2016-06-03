export function setTopLeft(top, left, width, height) {
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
export function bottom(layout) {
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
export function collides(l1, l2) {
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
export function compact(layout, verticalCompact) {
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
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */
export function getLayoutItem(layout, id) {
    for (let i = 0, len = layout.length; i < len; i++) {
        if (layout[i].i === id) return layout[i];
    }
}

/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */
export function getFirstCollision(layout, layoutItem) {
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
export function getStatics(layout) {
    return layout.filter((l) => l.static);
}


/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * @param  {Array}      layout Full layout to modify.
 * @param  {LayoutItem} l      element to move.
 * @param  {Number}     [x]    X position in grid units.
 * @param  {Number}     [y]    Y position in grid units.
 * @param  {Boolean}    [isUserAction] If true, designates that the item we're moving is
 *                                     being dragged/resized by th euser.
 */
export function moveElement(layout, l, x, y, isUserAction) {
    if (l.static) return layout;

    // Short-circuit if nothing to do.
    if (l.y === y && l.x === x) return layout;

    const movingUp = y && l.y > y;
    // This is quite a bit faster than extending the object
    if (typeof x === 'number') l.x = x;
    if (typeof y === 'number') l.y = y;
    l.moved = true;

    // If this collides with anything, move it.
    // When doing this comparison, we have to sort the items we compare with
    // to ensure, in the case of multiple collisions, that we're getting the
    // nearest collision.
    let sorted = sortLayoutItemsByRowCol(layout);
    if (movingUp) sorted = sorted.reverse();
    const collisions = getAllCollisions(sorted, l);

    // Move each item that collides away from this element.
    for (let i = 0, len = collisions.length; i < len; i++) {
        const collision = collisions[i];
        // console.log('resolving collision between', l.i, 'at', l.y, 'and', collision.i, 'at', collision.y);

        // Short circuit so we can't infinite loop
        if (collision.moved) continue;

        // This makes it feel a bit more precise by waiting to swap for just a bit when moving up.
        if (l.y > collision.y && l.y - collision.y > collision.h / 4) continue;

        // Don't move static items - we have to move *this* element away
        if (collision.static) {
            layout = moveElementAwayFromCollision(layout, collision, l, isUserAction);
        } else {
            layout = moveElementAwayFromCollision(layout, l, collision, isUserAction);
        }
    }

    return layout;
}


/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {LayoutItem} collidesWith Layout item we're colliding with.
 * @param  {LayoutItem} itemToMove   Layout item we're moving.
 * @param  {Boolean} [isUserAction]  If true, designates that the item we're moving is being dragged/resized
 *                                   by the user.
 */
export function moveElementAwayFromCollision(layout, collidesWith,
                                             itemToMove, isUserAction) {

    // If there is enough space above the collision to put this element, move it there.
    // We only do this on the main collision as this can get funky in cascades and cause
    // unwanted swapping behavior.
    if (isUserAction) {
        // Make a mock item so we don't modify the item here, only modify in moveElement.
        const fakeItem = {
            x: itemToMove.x,
            y: itemToMove.y,
            w: itemToMove.w,
            h: itemToMove.h,
            i: '-1'
        };
        fakeItem.y = Math.max(collidesWith.y - itemToMove.h, 0);
        if (!getFirstCollision(layout, fakeItem)) {
            return moveElement(layout, itemToMove, undefined, fakeItem.y);
        }
    }

    // Previously this was optimized to move below the collision directly, but this can cause problems
    // with cascading moves, as an item may actually leapflog a collision and cause a reversal in order.
    return moveElement(layout, itemToMove, undefined, itemToMove.y + 1);
}


/**
 * Compact an item in the layout.
 */
export function compactItem(compareWith, l, verticalCompact) {
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
export function sortLayoutItemsByRowCol(layout) {
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
export function createMarkup(obj) {
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
export function addPx(name, value) {
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

export function hyphenate(str) {
    return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}
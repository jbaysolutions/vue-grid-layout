// Get {x, y} positions from event.
export function getControlPosition(e) {
    return offsetXYFromParentOf(e);
}


// Get from offsetParent
export function offsetXYFromParentOf(evt) {
    const offsetParent = evt.target.offsetParent || document.body;
    const offsetParentRect = evt.offsetParent === document.body ? {left: 0, top: 0} : offsetParent.getBoundingClientRect();

    // console.log("DELTA LEFT  => " + evt.deltaRect.left)
    // console.log("DELTA RIGHT => " + evt.deltaRect.right)
    // console.log("EDGES => " + JSON.stringify(evt.edges))
    // console.log("CLIENT X => " + evt.clientX)
    // console.log("CLIENT Y => " + evt.clientY)

    const x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;

    const y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
    // console.log("X=" + x + " Y=" + y)

    /*const x = Math.round(evt.clientX + offsetParent.scrollLeft - offsetParentRect.left);
    const y = Math.round(evt.clientY + offsetParent.scrollTop - offsetParentRect.top);*/


    return {x, y};
}


// Create an data object exposed by <DraggableCore>'s events
export function createCoreData(lastX, lastY, x, y) {
    // console.log("lastX=" + lastX + ", lastY=" + lastY + ", x=" + x + ", y=" + y)
    // State changes are often (but not always!) async. We want the latest value.
    const isStart = !isNum(lastX);

    if (isStart) {
        // If this is our first move, use the x and y as last coords.
        return {
            deltaX: 0, deltaY: 0,
            lastX: x, lastY: y,
            x: x, y: y
        };
    } else {
        // Otherwise calculate proper values.
        return {
            deltaX: x - lastX, deltaY: y - lastY,
            lastX: lastX, lastY: lastY,
            x: x, y: y
        };
    }
}


function isNum(num)  {
    return typeof num === 'number' && !isNaN(num);
}


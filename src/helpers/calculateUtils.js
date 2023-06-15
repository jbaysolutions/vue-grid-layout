/**
 * Compute the column width.
 *
 * @param  {Object} positionParams Parameters of grid needed for coordinates calculations.
 * @return {Number}                Column width (in pixels).
 */
export function calcGridColWidth(positionParams) {
    const { margin, containerWidth, cols } = positionParams;
    return (containerWidth - (margin[0] * (cols + 1))) / cols;
}

/**
 * Compute an item width and height.
 *
 * @param  {Object} positionParams Parameters of grid needed for coordinates calculations.
 * @param  {Number} w              W coordinate in grid units.
 * @param  {Number} h              H coordinate in grid units.
 * @return {Object}                width and height (in pixels).
 */
export function calcItemSize(positionParams, w, h) {
    return {
        // 0 * Infinity === NaN, which causes problems with resize constriants;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes deopt
        width: w === Infinity ? w : Math.round(calcGridColWidth(positionParams) * w + Math.max(0, w - 1) * positionParams.margin[0]),
        height: h === Infinity ? h : Math.round(positionParams.rowHeight * h + Math.max(0, h - 1) * positionParams.margin[1])
    }
}

/**
 * Translate x and y coordinates from pixels to grid units.
 * 
 * @param  {Object} positionParams  Parameters of grid needed for coordinates calculations.
 * @param  {Number} top             Top position (relative to parent) in pixels.
 * @param  {Number} left            Left position (relative to parent) in pixels.
 * @param  {Number} w               W coordinate in grid units.
 * @param  {Number} h               H coordinate in grid units.
 * @return {Object}                 x and y in grid units.
 */
export function calcXY(positionParams, top, left, w, h) {
    const { margin, cols, rowHeight, maxRows } = positionParams;
    const colWidth = calcGridColWidth(positionParams);

    // left = colWidth * x + margin * (x + 1)
    // l = cx + m(x+1)
    // l = cx + mx + m
    // l - m = cx + mx
    // l - m = x(c + m)
    // (l - m) / (c + m) = x
    // x = (left - margin) / (coldWidth + margin)
    let x = Math.round((left - margin[0]) / (colWidth + margin[0]));
    let y = Math.round((top - margin[1]) / (rowHeight + margin[1]));

    // Capping
    x = Math.max(Math.min(x, cols - w), 0);
    y = Math.max(Math.min(y, maxRows - h), 0);

    return {x, y};
}
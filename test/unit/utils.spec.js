// @flow
/* eslint-env jest */

import {
    bottom,
    collides,
    compact,
    moveElement,
    sortLayoutItemsByRowCol,
    validateLayout
  } from "../../src/helpers/utils";
  
  describe("bottom", () => {
    it("Handles an empty layout as input", () => {
      expect(bottom([])).toEqual(0);
    });
  
    it("Returns the bottom coordinate of the layout", () => {
      expect(
        bottom([
          { i: "1", x: 0, y: 1, w: 1, h: 1 },
          { i: "2", x: 1, y: 2, w: 1, h: 1 }
        ])
      ).toEqual(3);
    });
  });
  
  describe("sortLayoutItemsByRowCol", () => {
    it("should sort by top to bottom right", () => {
      const layout = [
        { x: 1, y: 1, w: 1, h: 1, i: "2" },
        { x: 1, y: 0, w: 1, h: 1, i: "1" },
        { x: 0, y: 1, w: 2, h: 2, i: "3" }
      ];
      expect(sortLayoutItemsByRowCol(layout)).toEqual([
        { x: 1, y: 0, w: 1, h: 1, i: "1" },
        { x: 0, y: 1, w: 2, h: 2, i: "3" },
        { x: 1, y: 1, w: 1, h: 1, i: "2" }
      ]);
    });
  });

  describe("collides", () => {
    it("Returns whether the layout items collide", () => {
      expect(
        collides(
          { i: "1", x: 0, y: 1, w: 1, h: 1 },
          { i: "2", x: 1, y: 2, w: 1, h: 1 }
        )
      ).toEqual(false);
      expect(
        collides(
          { i: "1", x: 0, y: 1, w: 1, h: 1 },
          { i: "2", x: 0, y: 1, w: 1, h: 1 }
        )
      ).toEqual(true);
    });
  });
  
  describe("validateLayout", () => {
    it("Validates an empty layout", () => {
      validateLayout([]);
    });
    it("Validates a populated layout", () => {
      validateLayout([
        { i: "1", x: 0, y: 1, w: 1, h: 1 },
        { i: "2", x: 1, y: 2, w: 1, h: 1 }
      ]);
    });
    it("Throws errors on invalid input", () => {
      expect(() => {
        validateLayout([
          { i: "1", x: 0, y: 1, w: 1, h: 1 },
          { i: "2", x: 1, y: 2, w: 1 }
        ]);
      }).toThrowError(/layout\[1\]\.h must be a number!/i);
    });
  });
  
  describe("moveElement", () => {
    function compactAndMove(
      layout,
      layoutItem,
      x,
      y,
      isUserAction,
      preventCollision
    ) {
      return compact(
        moveElement(
          layout,
          layoutItem,
          x,
          y,
          isUserAction,
          preventCollision
        )
      );
    }
  
    it("Does not change layout when colliding on no rearrangement mode", () => {
      const layout = [
        { i: "1", x: 0, y: 1, w: 1, h: 1, moved: false },
        { i: "2", x: 1, y: 2, w: 1, h: 1, moved: false }
      ];
      const layoutItem = layout[0];
      expect(
        moveElement(
          layout,
          layoutItem,
          1,
          2, // x, y
          true,
          true // isUserAction, preventCollision
        )
      ).toEqual([
        { i: "1", x: 0, y: 1, w: 1, h: 1, moved: false },
        { i: "2", x: 1, y: 2, w: 1, h: 1, moved: false }
      ]);
    });
  
    it("Does change layout when colliding in rearrangement mode", () => {
      const layout = [
        { i: "1", x: 0, y: 0, w: 1, h: 1, moved: false },
        { i: "2", x: 1, y: 0, w: 1, h: 1, moved: false }
      ];
      const layoutItem = layout[0];
      expect(
        moveElement(
          layout,
          layoutItem,
          1,
          0, // x, y
          true,
          false // isUserAction, preventCollision
        )
      ).toEqual([
        { i: "1", x: 1, y: 0, w: 1, h: 1, moved: true },
        { i: "2", x: 1, y: 1, w: 1, h: 1, moved: true }
      ]);
    });
  
    it("Moves elements out of the way without causing panel jumps when compaction is vertical", () => {
      const layout = [
        { x: 0, y: 0, w: 1, h: 10, i: "A" },
        { x: 0, y: 10, w: 1, h: 1, i: "B" },
        { x: 0, y: 11, w: 1, h: 1, i: "C" }
      ];
      // move A down slightly so it collides with C; can cause C to jump above B.
      // We instead want B to jump above A (it has the room)
      const itemA = layout[0];
      expect(
        compactAndMove(
          layout,
          itemA,
          0,
          1, // x, y
          true,
          false // isUserAction, preventCollision
        )
      ).toEqual([
        expect.objectContaining({ x: 0, y: 1, w: 1, h: 10, i: "A" }),
        expect.objectContaining({ x: 0, y: 0, w: 1, h: 1, i: "B" }),
        expect.objectContaining({ x: 0, y: 11, w: 1, h: 1, i: "C" })
      ]);
    });
  
    it("Calculates the correct collision when moving large object far", () => {
      const layout = [
        { x: 0, y: 0, w: 1, h: 10, i: "A" },
        { x: 0, y: 10, w: 1, h: 1, i: "B" },
        { x: 0, y: 11, w: 1, h: 1, i: "C" }
      ];
      // Move A down by 2. This should move B above, but since we don't compact in between,
      // C should move below.
      const itemA = layout[0];
      expect(
        moveElement(
          layout,
          itemA,
          0,
          2, // x, y
          true,
          false // isUserAction, preventCollision
        )
      ).toEqual([
        expect.objectContaining({ x: 0, y: 2, w: 1, h: 10, i: "A" }),
        expect.objectContaining({ x: 0, y: 1, w: 1, h: 1, i: "B" }),
        expect.objectContaining({ x: 0, y: 12, w: 1, h: 1, i: "C" })
      ]);
    });
  
    it("Moves elements out of the way without causing panel jumps when compaction is vertical", () => {
      const layout = [
        { x: 0, y: 0, w: 1, h: 1, i: "A" },
        { x: 1, y: 0, w: 1, h: 1, i: "B" },
        { x: 0, y: 1, w: 2, h: 2, i: "C" }
      ];
      // move A over slightly so it collides with B; can cause C to jump above B
      // this test will check that that does not happen
      const itemA = layout[0];
      expect(
        moveElement(
          layout,
          itemA,
          1,
          0, // x, y
          true,
          false // isUserAction, preventCollision
        )
      ).toEqual([
        { x: 1, y: 0, w: 1, h: 1, i: "A", moved: true },
        { x: 1, y: 1, w: 1, h: 1, i: "B", moved: true },
        { x: 0, y: 2, w: 2, h: 2, i: "C", moved: true }
      ]);
    });
  
    it("Moves one element to another should cause moving down panels, vert compact", () => {
      // | A | B |
      // |C|  D  |
      const layout = [
        { x: 0, y: 0, w: 2, h: 1, i: "A" },
        { x: 2, y: 0, w: 2, h: 1, i: "B" },
        { x: 0, y: 1, w: 1, h: 1, i: "C" },
        { x: 1, y: 1, w: 3, h: 1, i: "D" }
      ];
      // move B left slightly so it collides with A; can cause C to jump above A
      // this test will check that that does not happen
      const itemB = layout[1];
      expect(
        compactAndMove(
          layout,
          itemB,
          1,
          0, // x, y
          true,
          false // isUserAction, preventCollision
        )
      ).toEqual([
        expect.objectContaining({ x: 0, y: 1, w: 2, h: 1, i: "A" }),
        expect.objectContaining({ x: 1, y: 0, w: 2, h: 1, i: "B" }),
        expect.objectContaining({ x: 0, y: 2, w: 1, h: 1, i: "C" }),
        expect.objectContaining({ x: 1, y: 2, w: 3, h: 1, i: "D" })
      ]);
    });
  
    it("Moves one element to another should cause moving down panels, vert compact", () => {
      // | A |
      // |B|C|
      //   | |
      //
      // Moving C above A should not move B above A
      const layout = [
        { x: 0, y: 0, w: 2, h: 1, i: "A" },
        { x: 0, y: 1, w: 1, h: 1, i: "B" },
        { x: 1, y: 1, w: 1, h: 2, i: "C" }
      ];
      // Move C up.
      const itemB = layout[2];
      expect(
        compactAndMove(
          layout,
          itemB,
          1,
          0, // x, y
          true,
          false // isUserAction, preventCollision
        )
      ).toEqual([
        expect.objectContaining({ x: 0, y: 2, w: 2, h: 1, i: "A" }),
        expect.objectContaining({ x: 0, y: 3, w: 1, h: 1, i: "B" }),
        expect.objectContaining({ x: 1, y: 0, w: 1, h: 2, i: "C" })
      ]);
    });
  });
  
  describe("compact vertical", () => {
    it("Removes empty vertical space above item", () => {
      const layout = [{ i: "1", x: 0, y: 1, w: 1, h: 1 }];
      expect(compact(layout, true)).toEqual([
        { i: "1", x: 0, y: 0, w: 1, h: 1, moved: false }
      ]);
    });
  
    it("Resolve collision by moving item further down in array", () => {
      const layout = [
        { x: 0, y: 0, w: 1, h: 5, i: "1" },
        { x: 0, y: 1, w: 1, h: 1, i: "2" }
      ];
      expect(compact(layout, true)).toEqual([
        { x: 0, y: 0, w: 1, h: 5, i: "1", moved: false },
        { x: 0, y: 5, w: 1, h: 1, i: "2", moved: false }
      ]);
    });
  
    it("Handles recursive collision by moving new collisions out of the way before moving item down", () => {
      const layout = [
        { x: 0, y: 0, w: 2, h: 5, i: "1" },
        { x: 0, y: 0, w: 10, h: 1, i: "2" },
        { x: 5, y: 1, w: 1, h: 1, i: "3" },
        { x: 5, y: 2, w: 1, h: 1, i: "4" },
        { x: 5, y: 3, w: 1, h: 1, i: "5", static: true }
      ];
  
      expect(compact(layout, true)).toEqual([
        { x: 0, y: 0, w: 2, h: 5, i: "1", moved: false },
        { x: 0, y: 5, w: 10, h: 1, i: "2", moved: false },
        { x: 5, y: 0, w: 1, h: 1, i: "3", moved: false },
        { x: 5, y: 1, w: 1, h: 1, i: "4", moved: false },
        { x: 5, y: 3, w: 1, h: 1, i: "5", moved: false, static: true }
      ]);
    });
  });

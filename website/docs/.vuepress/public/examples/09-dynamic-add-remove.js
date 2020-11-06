var testLayout = [
  { x: 0, y: 0, w: 2, h: 2, i: "0" },
  { x: 2, y: 0, w: 2, h: 2, i: "1" },
  { x: 4, y: 0, w: 2, h: 2, i: "2" },
  { x: 6, y: 0, w: 2, h: 2, i: "3" },
  { x: 8, y: 0, w: 2, h: 2, i: "4" },
];

// var GridLayout = VueGridLayout.GridLayout;
// var GridItem = VueGridLayout.GridItem;

new Vue({
  el: "#app",
  // components: {
  //     "GridLayout": GridLayout,
  //     "GridItem": GridItem
  // },
  data: {
    layout: testLayout,
    draggable: true,
    resizable: true,
    responsive: true,
    colNum: 12,
    index: 0,
  },
  mounted: function () {
    this.index = this.layout.length;
  },
  methods: {
    addItem: function () {
      // Add a new item. It must have a unique key!
      this.layout.push({
        x: (this.layout.length * 2) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12), // puts it at the bottom
        w: 2,
        h: 2,
        i: this.index,
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
    },
    removeItem: function (val) {
      const index = this.layout.map(item => item.i).indexOf(val);
      this.layout.splice(index, 1);
    },
  },
});

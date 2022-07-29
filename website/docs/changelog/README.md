---
sidebar: auto
---
# Changelog

## 2.3.12 (Jan 15, 2020)

* Bumped interact.js to 1.10.2
* Added 'preserveAspectRatio' property to GridItem (thanks [validide](https://github.com/validide))

## 2.3.11 (Oct 13, 2020)

* fix: regression when using responsive layout (#487)

## 2.3.10 (Oct 12, 2020)

* Bumped interact.js to 1.10.0, now imported as ES6 modules to optimize size 
* fix: resizing a grid item in RTL mode wasn't working (thanks [or-lat](https://github.com/or-lat)) 
* Added GridLayout.useStyleCursor property to fix possible browser freezes (thanks [mosuzi](https://github.com/mosuzi)) 
* fix: wrong parent layout when GridItem is not the child of GridLayout (thanks [lzq4047](https://github.com/lzq4047)) 
* Fix: Item's size changes when hiding/displaying it again in responsive mode (thanks [lustan3216](https://github.com/lustan3216)) 

## 2.3.9 (Sep 28, 2020)

* Fix plugin installation (fixes #311) (thanks [yfwz100](https://github.com/yfwz100))
* Bumped interact.js to 1.9.22

## 2.3.8 (July 31, 2020)

* Make margins reactive (thanks [yfwz100](https://github.com/yfwz100))
* Added missing 'layout-updated' events (thanks [ben-lau](https://github.com/ben-lau))
* Support for initial responsive layouts and breakpoint change event (thanks [ftylitak](https://github.com/ftylitak))
* Bugfix for possible error when layout items get removed and interactObj is not set (thanks [Tofandel](https://github.com/Tofandel))
* Fix wrong grid item sorting in responsive mode (thanks [pieterbeulque](https://github.com/pieterbeulque))

## 2.3.7 (Oct 31, 2019)

* renamed 'resized' event emitted when the container changes size (browser window or other), introduced in #337, fixes #358 
* bugfix on layout-ready event

## 2.3.6 (Sep 11, 2019)

* reverted grid item w and h previous rounding change, fixes #355

## 2.3.5 (Sep 7, 2019)

* Fix: no-touch on mobile and only if item is draggable or resizable (thanks [DGoms](https://github.com/DGoms)).
* Prevent collision feature (thanks [SheanDe](https://github.com/SheanDe)).
* Simplified Chinese README (thanks [harrywangchina](https://github.com/harrywangchina)).
* 'resized' event now emitted if grid item is resized due to changes other than a manual resize (e.g. browser window resize) (thanks [pmorch](https://github.com/pmorch)).
* Improvement on 'layout-ready' event emit (thanks [pmorch](https://github.com/pmorch)).
* Added watchers for min/max height and width (thanks [grinat](https://github.com/grinat)).
* Improvement: make sure the size of grid-item is bigger than the slot-item (thanks [ywmail](https://github.com/ywmail)).

## 2.3.4 (Mar 5, 2019)

* Support for static items (thanks [panjiangyi](https://github.com/panjiangyi)).
* RTL bugfix (thanks [irvingwa](https://github.com/irvingwa)).
* Memory leak fixes (thanks [aiankile](https://github.com/aiankile)).
* Fixed exception on grid layout mount (thanks [BenoitZugmeyer](https://github.com/BenoitZugmeyer)).
* Fixed overlapping and resizing bugs on responsive mode (thanks [shpfive](https://github.com/shpfive)).
* Added new events emited by GridLayout (layout-created, layout-before-mount, layout-mounted, layout-ready) (thanks [samuelmolinski](https://github.com/samuelmolinski)).

## 2.3.3 (Dec 26, 2018)

* Reverted adding vue as external, which caused problems loading umd.

## 2.3.2 (Dec 13, 2018)

* Added vue as externals webpack config to fix startup problems (thanks [Micene9](https://github.com/Micene09))

## 2.3.1 (Nov 6, 2018)

* Previous fix for touch dragging on Android broke dragging on other mobile browsers (thanks [onx2](https://github.com/onx2))


## 2.3.0 (Oct 26, 2018)

* Responsive layout support (thanks [shpfive](https://github.com/shpfive))
* Fix for touch dragging on Android (thanks [pbabey](https://github.com/pbabey))

## 2.2.0 (Sep 10, 2018)

* changed project structure and build using Vue CLI
* GridItem new autosize method. For now, need to be called from child component with this.$parent.autoSize() (thanks[mech01nc01](https://github.com/mech01nc01)) 
* Abstract DOM related calls for initial SSR Support (thanks[Kukks](https://github.com/Kukks)) 
* GridItem.i can now be a number or a string (thanks[xch1029](https://github.com/xch1029)) 
* Use interactjs size restrictions to limit resizing (thanks[LuisCarreras](https://github.com/LuisCarreras)) 
* Fixed interactjs instance leak on instance release (thanks[zzuligy](https://github.com/zzuligy)) 

## 2.1.13 (May 2, 2018)

* Resize event now also emits dimensions in pixels (thanks [buremba](https://github.com/buremba)) 
* Support for dynamic col-num (#121) (thanks [ittus](https://github.com/ittus)) 

## 2.1.12 (Fev 27, 2018)

* Updated interact.js to 1.3.3 (#144) 

## 2.1.11 (Jan 5, 2018)

* Fixed issue with multiple grids on same vm (#134) (thanks [Suen](https://github.com/sunzongzheng))
* Fixed issue with layout update on reassignment (#130) (thanks [daizengyu](https://github.com/daizengyu123))

## 2.1.10 (Dec 15, 2017)

* Fixed possible bug related with #119
* Changed css translate to translate3d (#96)
* Added is-mirrored config, allowing the grid items to be rendered from right to left (horizontal flip) (thanks [kweij](https://github.com/kweij))
* Added grid updated event for easier integration with vuex (thanks [SergeyKhval](https://github.com/SergeyKhval))

## 2.1.9 (Aug 17, 2017)

* Fixed local module reference to interact.js

## 2.1.8 (Aug 17, 2017)

* Fixed #61 and #37
* Fixed #82
* Fixed #87

## 2.1.7 (Aug 17, 2017)

* Fixed #59
* Fixed #83
* Implemented support for dragAllowFrom and dragIgnoreFrom props on GridItem (thanks [ThePlastic](https://github.com/ThePlastic))

## 2.1.6 (Apr 6, 2017)

* Fixed #43, configurable drag elements ignore on grid item contents (thanks [neithere](https://github.com/neithere)) 
* Fix for getLayoutItem, sometimes returns null elements (thanks [pbabey](https://github.com/pbabey))

## 2.1.5 (Mar 24, 2017)

* Really fixed #22 #32, multiple grid instances were not working properly in 2.1.4
* resizedEvent now also returns item width and height in pixels (implements #34)


## 2.1.4 (Mar 20, 2017)

* Implemented #32, support for multiple grid instances on the same page

## 2.1.3 (Mar 9, 2017)

* Fixed #27, props mutation warnings


## 2.1.2 (Fev 16, 2017)

* Implemented #12, buttons on GridItems would trigger drag on mobile
* Implemented #24, listeners removal beforeDestroy (thanks [pbabey](https://github.com/pbabey))


## 2.1.1 (Fev 9, 2017)

* Implemented #13, dynamic row height update support
* Implemented #23, dynamic enable/disable dragging and resizing support
* Implemented #21, moved and resized events


## 2.1.0 (Fev 6, 2017)

* RTL support (thanks [easteregg](https://github.com/easteregg))
* Move and resize events (thanks [ThePlastic](https://github.com/ThePlastic))

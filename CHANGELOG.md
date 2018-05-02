# Changelog

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
# Changelog

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
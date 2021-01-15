---
sidebar: auto
---
# 更新日志

## 2.3.12（2021年01月15日）


## 2.3.11（2020年10月13日）

* 已修复：使用响应式布局时的回归（＃487）

## 2.3.10（2020年10月12日）

* 将interact.js升级到1.10.0，现在作为ES6模块导入以优化大小 
* 已修复：在RTL模式下无法调整栅格元素的大小 （感谢 [or-lat](https://github.com/or-lat)）
* 添加了GridLayout.useStyleCursor属性以修复可能的浏览器冻结 （感谢 [mosuzi](https://github.com/mosuzi)）
* 已修复：当GridItem不是GridLayout的子级时，父布局错误 （感谢 [lzq4047](https://github.com/lzq4047)） 
* 已修复：在响应模式下再次隐藏/显示元素时，元素的大小发生变化 （感谢 [lustan3216](https://github.com/lustan3216))）

## 2.3.9（2020年9月28日）

* 已修复插件安装（已修复＃311） （感谢 [yfwz100](https://github.com/yfwz100)）
* interact.js升级版本至1.9.22

## 2.3.8（2020年7月31日）

* 支持动态修改margin属性 （感谢 [yfwz100](https://github.com/yfwz100)）
* 添加了丢失的“布局更新”事件 （感谢 [ben-lau](https://github.com/ben-lau)）
* 支持初始响应式布局和断点更改事件 （感谢 [ftylitak](https://github.com/ftylitak)）
* 修正了布局项被删除且未设置interactObj时可能出现的错误 （感谢 [Tofandel](https://github.com/Tofandel)）
* 在响应模式下修复错误的栅格元素排序 （感谢 [pieterbeulque](https://github.com/pieterbeulque)）

## 2.3.7（2019年10月31日）

* 在＃337中引入容器更改大小（浏览器窗口或其他大小）时发出的重命名“调整大小”事件，在＃358已修复
* 已修复layout-ready事件

## 2.3.6（2019年9月11日）

* 恢复栅格元素w和h先前的舍入更改，已修复＃355

## 2.3.5（2019年9月7日）

* 已修复：在移动设备上无触摸，并且仅当元素可拖动或可调整大小时 （感谢 [DGoms](https://github.com/DGoms)）。
* 防止碰撞功能 （感谢  [SheanDe](https://github.com/SheanDe)）。
* 简体中文README （感谢 [harrywangchina](https://github.com/harrywangchina)）。
* 如果由于除手动调整大小（例如，浏览器窗口调整大小）以外的更改而调整了栅格项的大小，则此时将发出`resized`事件 （感谢 [pmorch](https://github.com/pmorch)）。
* 改进`layout-ready`触发事件 （感谢 [pmorch](https://github.com/pmorch)）。
* 添加了min/max height and width的监视程序 （感谢 [grinat](https://github.com/grinat)）。
* 改进：确保grid-item的大小大于slot-item （感谢 [ywmail](https://github.com/ywmail)）。

## 2.3.4（2019年3月5日）

* 支持静态部件 （感谢 [panjiangyi](https://github.com/panjiangyi)）。
* RTL错误修正 （感谢 [irvingwa](https://github.com/irvingwa)）。
* 内存泄漏修复 （感谢 [aiankile](https://github.com/aiankile)）。
* 已修复了栅格布局安装上的异常 （感谢 [BenoitZugmeyer](https://github.com/BenoitZugmeyer)）。
* 已修复了响应模式下重叠和调整大小的错误 （感谢 [shpfive](https://github.com/shpfive)）。
* 添加了GridLayout发出的新事件 （layout-created， layout-before-mount，layout-mounted，layout-ready） （感谢 [samuelmolinski](https://github.com/samuelmolinski)）。

## 2.3.3（2018年12月26日）

* 恢复了将vue作为外部添加，这导致加载umd时出现问题。

## 2.3.2（2018年12月13日）

* 添加了vue作为外部webpack配置以修复启动问题 （感谢 [Micene9](https://github.com/Micene09)）

## 2.3.1（2018年11月6日）

* 之前在Android上进行触摸拖动的修复方法打破了在其他移动浏览器上的拖动 （感谢 [onx2](https://github.com/onx2)）


## 2.3.0（2018年10月26日）

* 响应式布局支持 （感谢  [shpfive](https://github.com/shpfive)）
* 已修复了在Android上进行触摸拖动的问题 （感谢 [pbabey](https://github.com/pbabey)）

## 2.2.0（2018年9月10日）

* 使用Vue CLI更改了项目结构并进行了构建
* GridItem新的autosize方法。现在，需要使用this.$parent.autoSize()从子组件中调用  （感谢 [mech01nc01](https://github.com/mech01nc01)）
* 抽象的DOM相关要求提供初始SSR支持 （感谢 [Kukks](https://github.com/Kukks)）
* GridItem.i现在可以是数字或字符串 （感谢 [xch1029](https://github.com/xch1029)）
* 使用interactjs大小来限制调整大小 （感谢 [LuisCarreras](https://github.com/LuisCarreras)）
* 已修复了实例释放时的interactjs实例泄漏 （感谢 [zzuligy](https://github.com/zzuligy)）

## 2.1.13（2018年5月2日）

* 调整大小事件现在也发出以像素为单位的尺寸 （感谢 [buremba](https://github.com/buremba)）
* 支持动态列修改（#121） （感谢 [ittus](https://github.com/ittus)）

## 2.1.12（2018年2月27日）

* 将interact.js更新为1.3.3 （#144）

## 2.1.11（2018年1月5日）

* 解决了同一个虚拟机（＃134）上有多个栅格的问题 （感谢 [Suen](https://github.com/sunzongzheng)）
* 解决了重新分配时布局更新的问题（＃130） （感谢 [daizengyu](https://github.com/daizengyu123)）

## 2.1.10（2017年12月15日）

* 已修复了与＃119相关的可能错误
* 将CSS转换为Translation3D（＃96）
* 添加了is-mirrored配置，允许从右向左渲染栅格元素（水平翻转） （感谢 [kweij](https://github.com/kweij)）
* 添加了栅格更新事件，可以更轻松地与vuex集成 （感谢 [SergeyKhval](https://github.com/SergeyKhval)）

## 2.1.9（2017年8月17日）

* 已修复了对interact.js的本地模块引用

## 2.1.8（2017年8月17日）

* 已修复#61、#37
* 已修复#82
* 已修复#87

## 2.1.7（2017年8月17日）

* 已修复#59
* 已修复#83
* 对GridItem中props的dragAllowFrom和dragIgnoreFrom实现了支持 （感谢 [ThePlastic](https://github.com/ThePlastic)）

## 2.1.6（2017年4月6日）

* 已修复＃43，配置拖曳元件上的栅格项内容忽略 （感谢 [neithere](https://github.com/neithere)）
* 已修复了getLayoutItem，有时返回null元素 （感谢 [pbabey](https://github.com/pbabey)）

## 2.1.5（2017年3月24日）

* 真正修复＃22、＃32，多个栅格实例在2.1.4中无法正常工作
* resizeEvent现在还以像素为单位返回元素的宽度和高度（实现＃34）


## 2.1.4（2017年3月20日）

* 实现＃32，在同一页面上支持多个栅格实例

## 2.1.3（2017年3月9日）

* 已修复#27, props属性突变告警


## 2.1.2（2017年2月16日）

* 实现＃12，GridItems上的按钮将触发移动设备上的拖动
* 实现＃24，在销毁之前删除监听 （感谢  [pbabey](https://github.com/pbabey)）


## 2.1.1（2017年2月9日）

* 实现＃13，支持行高动态更新
* 实现＃23，支持动态启用/禁用拖动和调整大小
* 实现＃21，移动并调整大小的事件


## 2.1.0（2017年2月6日）

* RTL支持 （感谢 [easteregg](https://github.com/easteregg)）
* 移动和调整事件大小 （感谢 [ThePlastic](https://github.com/ThePlastic)）

# uber-basic-jquery-slideshow

A jQuery plugin to enable simple slideshow cross-fading between absolutely-positioned elements. Could be anything, does not have to be images.

### 860 bytes minified!

## Usage

HTML
```html
<div id='element'>
	<img src='' class='panel' />
	<img src='' class='panel' />
	<img src='' class='panel' />
</div>

or

<aside id='element'>
	<div class='panel'><h3>Foo</h3><p>Lorem ipsum dolor sit amet</p></div>
	<div class='panel'><h3>Bar</h3><p>Lorem ipsum dolor sit amet</p></div>
</aside>
```

CSS
```css
#element { width: x; height: y; position: relative; }
.panel { width: 100%; height: 100%; z-index: 5; position: absolute; top: 0; left: 0; display: none; }
```

JavaScript
```js
$('#element').slideShow();
$('#element').slideShow({ option: value });
```

### Demo
[http://lewiswalsh.com/demos/uber-basic-jquery-slider/](http://lewiswalsh.com/demos/uber-basic-jquery-slider/)

### License
Released under MIT license. This software is provided as-is. You are free to use and modify as you wish. Use of this code is at your own risk. It'd be cool if you let me know if you use it.

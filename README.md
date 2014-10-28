# &#220;ber Basic jQuery Slideshow

A jQuery plugin to enable simple slideshow cross-fading between absolutely-positioned elements. Could be anything, does not have to be images.

### 860 bytes minified!

## Usage

#### HTML
```html
<div class='slideshow'>
	<img src='' class='panel'>
	<img src='' class='panel'>
	<img src='' class='panel'>
</div>
```
or
```html
<aside class='slideshow'>
	<div class='panel'><h3>Foo</h3><p>Lorem ipsum dolor sit amet</p></div>
	<div class='panel'><h3>Bar</h3><p>Lorem ipsum dolor sit amet</p></div>
</aside>
```

#### CSS
```css
.slideshow { 
	width    : x; /* Required */
	height   : y; /* Not needed for responsive, see below */
	position : relative;
}
.slideshow img { 
	width    : 100%; 
	height   : 100%; 
	z-index  : 5; 
	position : absolute; 
	top      : 0; 
	left     : 0; 
	display  : none;
}
```

#### JavaScript
```js
$('.slideshow').slideShow();
```
or to set options:
```js
$('.slideshow').slideShow({ 
	panelClass    : '.myclass', 
	initialFadeIn : 1000,
	itemInterval  : 5000,
	fadeTime      : 2500
});
```

## Responsive
Ensure the outer element has a width, remove the height value and add an `:after` block with a `padding-top` percentage calculated from the ratio of the width to the height: For example, if I have a set of images of 575px by 241px I would calculate the ratio of width:height, in this case 2.39:1 and set the following:
```css
.slideshow {
	width: 300px; /* This can be anything, even set by media queries. 100% would also work */
	position: relative;
}
.slideshow:before{
	content: "";
	display: block;
	padding-top: 42%; /* 100% divided by 2.39 */
}
```


## Options
|Option|Description|Default|
|---|---|---|
|**panelClass**|Class of the panels in the slideshow|`.panel`|
|**initialFadeIn**|Initial fade-in time (in milliseconds)|`1000`|
|**itemInterval**|Interval between change (in milliseconds)|`5000`|
|**fadeTime**|Cross-fade time (in milliseconds)|`2500`|

## Demo
[http://lewiswalsh.com/demos/uber-basic-jquery-slider/](http://lewiswalsh.com/demos/uber-basic-jquery-slider/)

## License
Released under MIT license. This software is provided as-is. You are free to use and modify as you wish. Use of this code is at your own risk. It'd be cool if you let me know if you use it.

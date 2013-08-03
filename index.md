---
layout: docs
title: Box Lid Menu
excerpt: Box Lid Menu inspired by Toybox.
repo: jimjh/box-lid
---

## Overview

This jQuery plugin creates the box lid effect for navigation menus, and is
inspired by [Toybox](http://www.toybox.co.nz/). You can see it in action by
hovering your mouse over the menu bar on the left.

A bare bones example is also available on [github](https://github.com/jimjh/box-lid).
Finally, a simple introduction can be found on [my blog](http://blog.jimjh.com/jquery-plugin-box-lid-menu.html).

### Featured By

- [coliss.com](http://coliss.com/articles/build-websites/operation/javascript/jquery-plugin-box-lid-menu.html)
- [jquery.in](http://jquer.in/jquery-navigation-and-menu-plugins-from-2012/box-lid/)
- [HTML Drive](http://www.htmldrive.net/items/show/1329/JQuery-Box-Lid-Menu-in-action-by-hovering-your-mouse-over-the-menu-bar-on-the-left)
- [jQuery Script.net](http://www.jqueryscript.net/menu/Easy-jQuery-3D-Side-Menu-Plugin-with-CSS3-Box-Lid.html)
- [nacodes](http://www.nacodes.com/2013/07/12/jQuery-plugin-for-Box-Lid-Menu)

## Installation
First, include the stylesheet and javascript as follows:

```html
<link rel='stylesheet' type='text/css' href='css/box-lid.css'>
<script src='js/jquery.box-lid.min.js'></script>
```

Next, create the following HTML structure:

```html
  <div class='box-lid-menu'>
    <div class='box-lid-icon'></div>
    <nav>
      <!-- NAVIGATION CONTENTS -->
    </nav>
  </div>
  <div class='box-lid'>
    <div class='box-lid-content'>
      <!-- MAIN CONTENT -->
    </div>
  </div>
```

Finally, invoke `$('.box-lid-menu').boxLid()` where appropriate. The most
common usage should be

```js
$(function() {
  $('.box-lid-menu').boxLid();
});
```

## Configuration
There are two ways to configure the menu.

### SCSS
If you use SCSS, simply override the configuration variables before importing
[sass/box-lid.scss][sass]. For example,

```scss
$box-lid-background: #ccc;
@import 'box-lid';
```

Refer to the beginning of [sass/box-lid.scss][sass] for the complete list of
configuration variables.

### CSS
If the above method is not your cup of tea, you can also choose to override the CSS.
Unfortunately this method is terribly brittle.

  [demo]: http://jimjh.github.io/box-lid/demo.html
  [sass]: https://github.com/jimjh/box-lid/blob/master/sass/box-lid.scss

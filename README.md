# Box Lid Menu

This jQuery plugin creates the box lid effect for navigation menus, and is
inspired by [Toybox](http://www.toybox.co.nz/). Prettier documentation, with a
built-in demo, is available [here](http://jimjh.com/box-lid/).

## Installation
First, include the main stylesheet and javascript as follows:

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

You are highly encouraged to style your own navigation menu within the `nav`
element. The demo and the docs currently use `sass/box-lid-nav.scss`.

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

  [sass]: https://github.com/jimjh/box-lid/blob/master/sass/box-lid.scss

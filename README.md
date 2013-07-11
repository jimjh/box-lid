This jQuery plugin creates the box lid effect inspired by
[Toybox](http://www.toybox.co.nz/). Here is [a demo][demo].

## Installation

First, include the stylesheet and javascript as follows:

```html
<link rel='stylesheet' type='text/css' href='css/box-lid.css'>
<script src='js/box-lid.js'></script>
```

Next, create the following HTML structure:

```html
  <div class='box-lid'>
    <div class='box-lid-menu'>
      <nav>
        <!-- NAVIGATION CONTENTS -->
      </nav>
    </div>
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

- TODO release plugin

## Configuration

There are three ways to configure the menu.

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

  [demo]: http://jimjh.github.io/box-lid/
  [sass]: https://github.com/jimjh/box-lid/blob/master/sass/box-lid.scss

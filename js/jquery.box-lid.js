/*!
 * jQuery Box Lid Plugin v0.1
 * https://github.com/jimjh/box-lid
 *
 * Copyright 2013 Jiunn Haur Lim
 * Released under the MIT License
 *
 * Usage:
 *    $('.box-lid-menu').boxLid();
 */
;(function($) {
  'use strict';

  // TODO tests

  function BoxLid(opts) {

    opts = $.extend({
      container: 'body',
      flag:      'box-lid-open'
    }, opts);

    var container = $(opts.container);

    // opens the lid with a tiny delay to prevent blinking
    this.open  = function() {
      container.data('box-lid-timer', setTimeout(function() {
        container.addClass(opts.flag);
      }, 100));
    };

    // closes the lid
    this.close = function() {
      clearTimeout(container.data('box-lid-timer'));
      container.removeClass(opts.flag);
    };

  }

  $.fn.boxLid = function (options) {
    var box = new BoxLid(options);
    return this.each(function() {
      $(this).hover(box.open, box.close);
    });
  };

})(jQuery);

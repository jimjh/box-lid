/*!
 * jQuery Box Lid Plugin v0.1
 * https://github.com/jimjh/jquery-box-lid
 *
 * Copyright 2013 Jiunn Haur Lim
 * Released under the MIT License
 */
;(function($) {
  'use strict';

  var OPEN_TRIGGER   = '.box-lid-menu';
  var OPEN_PARENT    = '.box-lid';

  var OPEN_INDICATOR = 'box-lid-open';

  function open() {
    $(OPEN_PARENT).addClass(OPEN_INDICATOR);
  }

  function close() {
    $(OPEN_PARENT).removeClass(OPEN_INDICATOR);
  }

  $.fn.boxLid = function () {
    return this.each(function() {
      $(this).hover(open, close);
    });
  };

})(jQuery);

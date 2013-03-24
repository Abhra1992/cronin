//= require vendor/custom.modernizr
//= require jquery
//= require foundation
(function($, window, undefined_) {
  "use strict";

  var $doc, Modernizr;
  $doc = $(document);
  Modernizr = window.Modernizr;
  $(document).ready(function() {
    return $(document).foundation();
  });
  if (Modernizr.touch && !window.location.hash) {
    return $(window).load(function() {
      return setTimeout((function() {
        return window.scrollTo(0, 1);
      }), 0);
    });
  }
})(jQuery, this);
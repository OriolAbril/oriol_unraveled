/*
  Massively by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
    xxsmall: '(max-width: 360px)'
  });

  $(function() {

    var $window = $(window),
      $header = $('#homepage-header'),
      $main = $('#main'),

    // Scrolly.
      $('.scrolly').scrolly();

    // Intro.
      var $intro = $('#homepage-intro');

      if ($intro.length > 0) {

        // Hide intro on scroll (> small).
          skel.on('!small -small', function() {

            $main.unscrollex();

            $main.scrollex({
              mode: 'bottom',
              top: '25vh',
              bottom: '-50vh',
              enter: function() {
                $intro.addClass('hidden');
              },
              leave: function() {
                $intro.removeClass('hidden');
              }
            });

          });

        // Hide intro on scroll (<= small).
          skel.on('+small', function() {

            $main.unscrollex();

            $main.scrollex({
              mode: 'middle',
              top: '15vh',
              bottom: '-15vh',
              enter: function() {
                $intro.addClass('hidden');
              },
              leave: function() {
                $intro.removeClass('hidden');
              }
            });

        });

      }

  });

})(jQuery);

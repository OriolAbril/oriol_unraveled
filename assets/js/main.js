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
      $body = $('body'),
      $wrapper = $('#wrapper'),
      $header = $('#header'),
      $nav = $('#nav'),
      $main = $('#main'),
      $navPanelToggle, $navPanel, $navPanelInner;

    // Disable animations/transitions until the page has loaded.
      $window.on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('is-loading');
        }, 100);
      });

    // Prioritize "important" elements on medium.
      skel.on('+medium -medium', function() {
        $.prioritize(
          '.important\\28 medium\\29',
          skel.breakpoint('medium').active
        );
      });

    // Scrolly.
      $('.scrolly').scrolly();

    // Nav Panel.

      // Toggle.
        $navPanelToggle = $(
          '<a href="#navPanel" id="navPanelToggle">Menu</a>'
        )
          .appendTo($wrapper);

        // Change toggle styling once we've scrolled past the header.
          $header.scrollex({
            bottom: '5vh',
            enter: function() {
              $navPanelToggle.removeClass('alt');
            },
            leave: function() {
              $navPanelToggle.addClass('alt');
            }
          });

      // Panel.
        $navPanel = $(
          '<div id="navPanel">' +
            '<nav>' +
            '</nav>' +
            '<a href="#navPanel" class="close"></a>' +
          '</div>'
        )
          .appendTo($body)
          .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-navPanel-visible'
          });

        // Get inner.
          $navPanelInner = $navPanel.children('nav');

        // Move nav content on breakpoint change.
          var $navContent = $nav.children();

          skel.on('!medium -medium', function() {

            // NavPanel -> Nav.
              $navContent.appendTo($nav);

            // Flip icon classes.
              $nav.find('.icons, .icon')
                .removeClass('alt');

          });

          skel.on('+medium', function() {

            // Nav -> NavPanel.
            $navContent.appendTo($navPanelInner);

            // Flip icon classes.
              $navPanelInner.find('.icons, .icon')
                .addClass('alt');

          });

        // Hack: Disable transitions on WP.
          if (skel.vars.os == 'wp'
          && skel.vars.osVersion < 10)
            $navPanel
              .css('transition', 'none');

    // Intro.
      var $intro = $('#intro');

      if ($intro.length > 0) {

        // Hack: Fix flex min-height on IE.
          if (skel.vars.browser == 'ie') {
            $window.on('resize.ie-intro-fix', function() {

              var h = $intro.height();

              if (h > $window.height())
                $intro.css('height', 'auto');
              else
                $intro.css('height', h);

            }).trigger('resize.ie-intro-fix');
          }

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

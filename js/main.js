window.onload = function () {
    window.onscroll = function () {
        scrollSticky();
    }
    var header = document.getElementById("b-page-header");
    var sticky = header.offsetTop;
    function scrollSticky() {
        if (window.pageYOffset > sticky) {
            header
                .classList
                .add('sticky');
        } else {
            header
                .classList
                .remove('sticky');
        }
    }
}
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
jQuery(document).ready(function ($) {
    "use strict";
    // loading page
    var loaderPage = function () {
        $('.b-loader')
            .delay(500)
            .fadeOut('slow');
    }
    // Document on load.
    $(document).ready(function () {
        loaderPage();
    });
    var siteMenuClone = function () {

        $('.js-clone-nav')
            .each(function () {
                var $this = $(this);
                $this
                    .clone()
                    .attr('class', 'site-nav-wrap')
                    .appendTo('.site-mobile-menu-body');
            });
        $('.js-clone-lang').each(function () {
            var $this = $(this);
            $this
                .clone()
                .attr('class', 'site-nav-wrap')
                .appendTo('.site-mobile-menu-lang');
        });
        setTimeout(function () {
            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this
                    .find('.arrow-collapse')
                    .attr({
                        'data-toggle': 'collapse',
                        'data-target': '#collapseItem' + counter
                    });

                $this
                    .find('> ul')
                    .attr({
                        'class': 'collapse',
                        'id': 'collapseItem' + counter
                    });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 992) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();
            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {

            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();
    // Cache selectors
    var topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a");

    // Bind click handler to menu items so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#"
                ? 0
                : $(href)
                    .offset()
                    .top - topMenuHeight + 1;
        $('html, body')
            .stop()
            .animate({
                scrollTop: offsetTop
            }, 900);
        e.preventDefault();
    });
    // Cache selectors
    var topMenu1 = $("#top-header"),
        topMenuHeight1 = topMenu1.outerHeight() + 15,
        // All list items
        menuItems1 = topMenu1.find("a");

    // Bind click handler to menu items so we can get a fancy scroll animation
    menuItems1.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#"
                ? 0
                : $(href)
                    .offset()
                    .top - topMenuHeight1 + 1;
        $('html, body')
            .stop()
            .animate({
                scrollTop: offsetTop
            }, 900);
        e.preventDefault();
    });

});
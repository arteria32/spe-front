;
(function() {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: false,
            margin: 0,
            responsiveClass: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoWidth: true,
            rewind: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });

        $(".owl-carousel2").owlCarousel({
            loop: true,
            center: false,
            margin: 0,
            responsiveClass: true,
            autoWidth: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);

    function get15dayFromNow() {
        return new Date(new Date().valueOf() + 15 * 24 * 60 * 60 * 1000);
    }
    $(function() {
        /* =========================================
            COUNTDOWN 4
         ========================================= */


        $('#clock-c').countdown("2021/11/16", function(event) {
            var $this = $(this).html(event.strftime('' +
                '<span class="h1 font-weight-bold">%D</span> Day%!d ' +
                '<span class="h1 font-weight-bold">%H</span> Hr ' +
                '<span class="h1 font-weight-bold">%M</span> Min ' +
                '<span class="h1 font-weight-bold">%S</span> Sec '));
        });

    });

}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}
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
    var partData = {
        "IR": 46,
        "AZ": 19,
        "RU": 160,
        "PE": 2,
        "DE": 6,
        "CO": 3,
        "PK": 7,
        "TJ": 3,
        "ID": 5,
        "AE": 1,
        "US": 1,
        "DZ": 5,
        "RO": 5,
        "FR": 1,
        "IN": 3,
        "KZ": 8,
        "JO": 2,
        "HR": 3,
        "TN": 3,
        "VE": 3,
        "MX": 3,
        "QA": 1,
        "UA": 1,
        "UG": 1,
        "NO": 1,
        "ME": 1,
        "RS": 11,
        "VN": 14,
        "LB": 2,
        "AT": 1,
        "NG": 20,
        "KE": 2,
        "YE": 3,
        "BY": 2,
        "IQ": 1,
        "CN": 1,
        "LY": 1,
        "EG": 1,
        "SD": 1,
        "SN": 1
    }

    $(function() {
        $('#world-map-gdp').vectorMap({
            map: 'world_mill',
            backgroundColor: "rgba(0,0,0,0)",
            series: {
                regions: [{
                    values: partData,
                    scale: ['#71bcf7', '#006fff'],
                    normalizeFunction: 'polynomial'
                }]
            },
            regionStyle: {
                initial: {
                    fill: '#bbdaf7'
                }
            },
            onRegionTipShow: function(e, el, code) {

                el.html(el.html() + ' (Participants - ' + (partData[code] || "") + ')');

            }
        });
    });

    var items = document.querySelectorAll('.circle a');
    var k = 50;
    for (var i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (50 - k * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

        items[i].style.top = (50 + k * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
    }




}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}
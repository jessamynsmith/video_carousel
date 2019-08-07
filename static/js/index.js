
jQuery(document).ready(function ($) {


    //owl carousel
    $(".owl-carousel-1").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 3
            },
            990: {
                items: 4
            }
        }
    })

    $(".owl-carousel-2").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            990: {
                items: 3
            }
        }
    })


    var movie = $(".movie");
    movie.css("opacity", "0.00009");
    movie.trigger("pause");
    movie.mouseover(function () {
        console.log("hovered");
        $(this).css("opacity", "1");
        $(this).trigger("play");
    });
    movie.mouseout(function () {
        console.log("left the hover");
        $(this).css("opacity", "0.00009");
        $(this).trigger("pause");
    });

});



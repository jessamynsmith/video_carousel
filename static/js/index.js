
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



    $("#movie1").css("opacity", "0.00009");
    $("#movie1").trigger("pause");
    $("#movie1").mouseover(function () {
        console.log("hovered 1");
        $("#movie1").css("opacity", "1");
        $("#movie1").trigger("play");
    });
    $("#movie1").mouseout(function () {
        console.log("left the hover 1");
        $("#movie1").css("opacity", "0.00009");
        $("#movie1").trigger("pause");
    });

    $("#movie2").css("opacity", "0.00009");
    $("#movie2").trigger("pause");
    $("#movie2").mouseover(function () {
        console.log("hovered 2");
        $("#movie2").css("opacity", "1");
        $("#movie2").trigger("play");
    });
    $("#movie2").mouseout(function () {
        console.log("left the hover 2");
        $("#movie2").css("opacity", "0.00009");
        $("#movie2").trigger("pause");
    });

    $("#movie3").css("opacity", "0.00009");
    $("#movie3").trigger("pause");
    $("#movie3").mouseover(function () {
        console.log("hovered");
        $("#movie3").css("opacity", "1");
        $("#movie3").trigger("play");
    });
    $("#movie3").mouseout(function () {
        console.log("left the hover");
        $("#movie3").css("opacity", "0.00009");
        $("#movie3").trigger("pause");
    });

    $("#movie4").css("opacity", "0.00009");
    $("#movie4").trigger("pause");
    $("#movie4").mouseover(function () {
        console.log("hovered");
        $("#movie4").css("opacity", "1");
        $("#movie4").trigger("play");
    });
    $("#movie4").mouseout(function () {
        console.log("left the hover");
        $("#movie4").css("opacity", "0.00009");
        $("#movie4").trigger("pause");
    });

    $("#movie5").css("opacity", "0.00009");
    $("#movie5").trigger("pause");
    $("#movie5").mouseover(function () {
        console.log("hovered");
        $("#movie5").css("opacity", "1");
        $("#movie5").trigger("play");
    });
    $("#movie5").mouseout(function () {
        console.log("left the hover");
        $("#movie5").css("opacity", "0.00009");
        $("#movie5").trigger("pause");
    });
});



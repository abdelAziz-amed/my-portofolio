$(document).ready(function () {
    $(window).scroll(function () {
        var r = $(this).scrollTop();
        if (r >= 763) {
            $('.navbar-default').css({
                'background-color': '#09313B'
            });
        } else {
            $('.navbar-default').css({
                'background-color': 'transparent'
            });
        }
    });
});











$('a').smoothScroll({
    speed: 1400,
});



$("h1").countTo();

new WOW().init();
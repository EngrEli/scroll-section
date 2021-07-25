$( document ).ready(function() {
    var tabs1 = $('.tabs-scroll .tabs-item-1');
    var tabs2 = $('.tabs-scroll .tabs-item-2');
    var tabs3 = $('.tabs-scroll .tabs-item-3');

    var heightThreshold1 = $(".box .img-1 img").offset().top;
    var heightThreshold_end1  = $(".box .img-1 img").offset().top + $(".box .img-1 img").height();

    var heightThreshold2 = $(".box .img-2 img").offset().top;
    var heightThreshold_end2  = $(".box .img-2 img").offset().top + $(".box .img-2 img").height();

    var heightThreshold3 = $(".box .img-3 img").offset().top;
    var heightThreshold_end3  = $(".box .img-3 img").offset().top + $(".box .img-3 img").height();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll + 400 >= heightThreshold1 && scroll  + 400 <=  heightThreshold_end1 ) {
            tabs1.addClass("dark-tab");
            tabs1.removeClass("dark-tab-img-1");
        } else {
            tabs1.removeClass("dark-tab");
        }
        if (scroll + 400 >= heightThreshold2 && scroll  + 400 <=  heightThreshold_end2 ) {
            tabs2.addClass("dark-tab");
            tabs1.removeClass("dark-tab");
        } else {
            tabs2.removeClass("dark-tab");
        }
        if (scroll + 400 >= heightThreshold3 && scroll  + 400 <=  heightThreshold_end3 ) {
            tabs3.addClass("dark-tab");
        } else {
            tabs3.removeClass("dark-tab");
        }
    });
});
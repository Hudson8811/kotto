$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");
    if ($(".main-slider").length > 0) {
        $(".main-slider").slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            /*   prevArrow: $('.slick-prev-arrow-m-s'),
               nextArrow: $('.slick-next-arrow-m-s')*/
            prevArrow: '<div class="slick-arrow-ms slick-prev-arrow-m-s "></div>',
            nextArrow: '<div class="slick-arrow-ms slick-next-arrow-m-s"></div>'
        }
        );
    }


    $('a[href!=""]').on('click', function () {
        //   console.log($(this).attr('href')[0]);
        if ($(this).attr('href')[0] == '#') {
            console.log(true);
            var el = $(this);
            var dest = el.attr('href');
            if (dest !== undefined && dest !== '') {
                var ww = $(window).width();
                if (ww > 1160) {
                    $('html').animate({ scrollTop: $(dest).offset().top - 62 }, 500);
                }
                else {
                    if (ww > 850) {
                        $('html').animate({ scrollTop: $(dest).offset().top - 74 }, 500);
                    }
                    else {
                        $('html').animate({ scrollTop: $(dest).offset().top - $('.site-header .sh-top-part').height() - 30 }, 500);

                    }
                }
            }
        }
        return false;
    });
});

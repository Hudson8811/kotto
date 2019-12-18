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
                console.log($(dest).position());
                $('html').animate({scrollTop:$(dest).offset().top - $('.site-header').height()}, 300);
                $('html').animate({scrollTop:$(dest).offset().top - $('.site-header').height()}, 200);
            }
        }
        return false;
    });
});

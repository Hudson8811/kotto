$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");
    if ($(".main-slider").length > 0) {
        $(".main-slider").slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow='<div class="slick-arrow-ms slick-prev-arrow-m-s "></div>',
            nextArrow='<div class="slick-arrow-ms slick-next-arrow-m-s"></div>'
        }
        );
    }

});

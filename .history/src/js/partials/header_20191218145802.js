$(document).ready(function () {
    $("window").on("scroll", function () {
      console.log( 1);

        console.log( $(window).scrollTop());
        if($(window).scrollTop()>10){
          $('.site-header').addClass('sh-scrolled');
        }
        else{
          $('.site-header').removeClass('sh-scrolled');
        }
      });



});

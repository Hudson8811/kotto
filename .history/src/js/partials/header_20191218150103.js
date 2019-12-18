$(document).ready(function () {
    $(window).on("scroll", function () {
        console.log( $(window).scrollTop());
        if($(window).scrollTop()>0){
          $('.site-header').addClass('sh-scrolled');
        }
        else{
          $('.site-header').removeClass('sh-scrolled');
        }
      });



});

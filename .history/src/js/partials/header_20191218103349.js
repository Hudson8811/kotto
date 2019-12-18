$(document).ready(function () {



});
$("window").on("scroll", function () {
    if($(window).scrollTop()>10){
      $('.site-header').addClass('sh-scrolled');
    }
    else{
      $('.site-header').removeClass('sh-scrolled');
    }
  });

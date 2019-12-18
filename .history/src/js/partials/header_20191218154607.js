function fixHeader() {
  if ($(window).scrollTop() > 0) {
    $('.site-header').addClass('sh-scrolled');
  }
  else {
    $('.site-header').removeClass('sh-scrolled');
  }
}


$(document).ready(function () {
  fixHeader();

  $(window).on("scroll", function () {
    fixHeader();
  });
});

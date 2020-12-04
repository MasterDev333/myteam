$(document).ready(function() {
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('body').append('<div class="overlay"></div>');
    } else {
      $('.overlay').remove();
    }
  });
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("header").addClass("sticky-header");
    } else {
      $('header').removeClass('sticky-header');
    }
  }); 
});
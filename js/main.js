$(document).ready(function () {
   $('.icon-menu').click(function (event) {
      $('.icon-menu').toggleClass('active');
      $('.menu__body').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
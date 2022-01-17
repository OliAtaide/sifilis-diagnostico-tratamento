
$('img[usemap]').imageMap()
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      var bullet = '<span class="' + className + ' btn  py-0 px-2">Lâmina ' + (index + 1) + '</span>';
      return bullet;
    },

  },
  nextButton: '.swiper-button-disabled',
  prevButton: '.swiper-button-disabled',


});

$('area[data-slide]').click(function (e) {
  e.preventDefault();
  swiper.slideTo(
    $(this).data('slide') - 1);
})
// $(".swiper-pagination").addClass('d-flex justify-content-center')
$(".swiper-pagination").append('<div class="d-flex justify-content-center"><div class="divider"></div></div>');
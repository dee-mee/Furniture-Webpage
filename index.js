function init() {
const taskbar = document.querySelector('.taskbar');
const lastScrollTop = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset;

  // If the user has scrolled down, hide the taskbar
  if (currentScrollTop > lastScrollTop) {
    taskbar.classList.add('hidden');
  } else {
    // If the user has scrolled up, show the taskbar
    taskbar.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;
});
$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    arrows: true,
    rtl: true
  });
});
}
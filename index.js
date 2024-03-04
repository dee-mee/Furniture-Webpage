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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear'
    
  });
});
}
const lastScrollTop = 0;
let isMouseDown = false;
// Get handle to the div that will contain
// our draggable object (in this case a <div>)
const objHandle = document.getElementById("drag");
objHandle.onmousedown = onMouseDown;
// Handle mouse-down event for the object

init();
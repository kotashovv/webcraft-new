document.addEventListener('DOMContentLoaded' , ready);

function ready() {
    const feedbackSlider = new Swiper('.feedback__body', {
        // Optional parameters
        loop: true,
        spaceBetween: 25,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          560: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          920: {
            slidesPerView: 3,
          }
        }
      });


      window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelectorAll(".parallax");
  // You can adjust the 0.4 to change the speed
    var coords = (scrolled * -0.3) + 'px'
  if (parallax.length != 0) {
    parallax.forEach(function(item) {
        item.style.transform = 'translateY(' + coords + ')';
      })
  }
};

    var sublistLink = document.querySelector('.with-sublist-link');
    if (sublistLink != null) {
        sublistLink.addEventListener('click', function(item) {
            var currentList = sublistLink.nextElementSibling;
            var activeLi = sublistLink.closest('.with-sublist');
            currentList.classList.toggle('active');
            activeLi.classList.toggle('active');
        })
    }
}
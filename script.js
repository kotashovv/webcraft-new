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

    var headerBtn = document.querySelector('.call-menu');
    var headerMenu = document.querySelector('.mobile-header')
    if (headerBtn) {
      headerBtn.addEventListener('click', function() {
        ClickMenu();
      })

      window.addEventListener('click', e=> {
        const target = e.target;
        if (!target.closest('.mobile-header') && !target.closest('.header')) {
          headerMenu.classList.remove('active')
          headerBtn.classList.remove('active')
          document.body.classList.remove('lock')
        }
      })
    }

    function ClickMenu() {
      headerMenu.classList.toggle('active')
      headerBtn.classList.toggle('active')
      document.body.classList.toggle('lock')
    }
    
    var wrapper = document.querySelector('.marquee-wrapper'),
    marquee = document.querySelector('.marquee'),   
    wrapperWidth = wrapper.offsetWidth,
    marqueeWidth = marquee.scrollWidth;
    function move() {
      if (wrapper) {
        var currentTX = getComputedStyle(marquee).transform.split(',');
        if( currentTX[4] === undefined ) {
            currentTX = -1;
        } else {
            currentTX = parseFloat(currentTX[4]) - 1;
        }
        
        if(-currentTX >= marqueeWidth) {
            marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
        
        } else {
            marquee.style.transform = 'translateX(' + currentTX + 'px)';
        }
      }
      
    }

    var interval = setInterval(move, 10);
}
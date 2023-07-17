// script.js
document.addEventListener('DOMContentLoaded', function() {
  let prevArrow = document.querySelector('.slider__arrow_prev');
  let nextArrow = document.querySelector('.slider__arrow_next');
  let dots = Array.from(document.querySelectorAll('.slider__dot'));
  let items = Array.from(document.querySelectorAll('.slider__item'));
  let currentIndex = 0;

  function showSlide(index) {
    items.forEach(function(item) {
      item.classList.remove('slider__item_active');
    });
    dots.forEach(function(dot) {
      dot.classList.remove('slider__dot_active');
    });

    items[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
  }

  function showPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    }
    showSlide(currentIndex);
  }

  function showNextSlide() {
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function showSlideFromDot(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  prevArrow.addEventListener('click', showPrevSlide);
  nextArrow.addEventListener('click', showNextSlide);
  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      showSlideFromDot(index);
    });
  });
});

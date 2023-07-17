// script.js
document.addEventListener('DOMContentLoaded', function() {
  var prevArrow = document.querySelector('.slider__arrow_prev');
  var nextArrow = document.querySelector('.slider__arrow_next');
  var dots = Array.from(document.querySelectorAll('.slider__dot'));
  var items = Array.from(document.querySelectorAll('.slider__item'));
  var currentIndex = 0;

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

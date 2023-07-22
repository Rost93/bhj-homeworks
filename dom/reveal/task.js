// Получаем все элементы с классом "reveal"
const revealElements = document.querySelectorAll('.reveal');

// Функция для проверки, попал ли элемент в поле зрения
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Функция для обработки события прокрутки
function revealOnScroll() {
  revealElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  });
}

// Добавляем обработчик события прокрутки окна
window.addEventListener('scroll', revealOnScroll);

// Вызываем функцию обработки события сразу, чтобы отображение элементов работало и при загрузке страницы
revealOnScroll();

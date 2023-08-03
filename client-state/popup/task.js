// Проверяем, было ли окно закрыто ранее
const isModalClosed = localStorage.getItem('modalClosed');

// Если окно не было закрыто ранее, показываем его
if (!isModalClosed) {
  const modal = document.getElementById('subscribe-modal');
  const closeButton = modal.querySelector('.modal__close');

  // Обработчик для кнопки закрытия
  closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    // Сохраняем информацию о закрытии окна в localStorage
    localStorage.setItem('modalClosed', 'true');
  });

  // Показываем окно
  modal.classList.add('modal_active');
}

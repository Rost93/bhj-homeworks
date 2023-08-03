// Функция для установки cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Функция для чтения cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Проверяем, было ли окно закрыто ранее
const isModalClosed = getCookie('modalClosed');

// Если окно не было закрыто ранее, показываем его
if (!isModalClosed) {
  const modal = document.getElementById('subscribe-modal');
  const closeButton = modal.querySelector('.modal__close');

  // Обработчик для кнопки закрытия
  closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    // Устанавливаем cookie о закрытии окна на 1 день
    setCookie('modalClosed', 'true', 1);
  });

  // Показываем окно
  modal.classList.add('modal_active');
}

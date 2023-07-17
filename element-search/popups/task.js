// Получаем ссылки на все необходимые элементы
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const closeButton = document.getElementsByClassName('modal__close');

// Показываем основное модальное окно при загрузке страницы
modalMain.classList.add('modal_active');

// Привязываем обработчики событий для закрытия окон
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = function() {
    // Закрываем текущее окно
    this.closest('.modal').classList.remove('modal_active');

    // Если закрываем главное окно, то открываем окно успеха
    if (this.classList.contains('show-success')) {
      modalSuccess.classList.add('modal_active');
    }
  };
}

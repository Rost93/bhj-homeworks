// Получаем все вкладки и содержимое вкладок
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

// Функция для скрытия всех вкладок
function hideTabs() {
  tabs.forEach(tab => tab.classList.remove('tab_active'));
  tabContents.forEach(content => content.classList.remove('tab__content_active'));
}

// Функция для отображения выбранной вкладки
function showTab(index) {
  tabs[index].classList.add('tab_active');
  tabContents[index].classList.add('tab__content_active');
}

// Регистрируем обработчики событий для всех вкладок
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    hideTabs(); // Скрываем все вкладки
    showTab(index); // Отображаем выбранную вкладку
  });
});

// По умолчанию показываем первую вкладку
showTab(0);
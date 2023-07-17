// Получаем все ссылки меню
const menuLinks = document.querySelectorAll('.menu__link');

// Перебираем каждую ссылку
menuLinks.forEach(link => {
  // Назначаем обработчик события click на каждую ссылку
  link.addEventListener('click', (event) => {
    // Находим родительский элемент меню
    const menuItem = link.closest('.menu__item');
    // Находим вложенное меню
    const submenu = menuItem.querySelector('.menu_sub');
    
    // Проверяем, есть ли вложенное меню
    if (submenu) {
      // Предотвращаем переход по ссылке
      event.preventDefault();
      
      // Переключаем класс menu_active у вложенного меню
      submenu.classList.toggle('menu_active');
      
      // Закрываем остальные вложенные меню
      const otherSubmenus = document.querySelectorAll('.menu_active');
      otherSubmenus.forEach(otherSubmenu => {
        if (otherSubmenu !== submenu) {
          otherSubmenu.classList.remove('menu_active');
        }
      });
    }
  });
});

const dropdowns = document.querySelectorAll('.dropdown');

// Обработчик события на каждую кнопку dropdown
dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const linkElements = dropdown.querySelectorAll('.dropdown__link');

    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });

    linkElements.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const newValue = link.textContent;
            valueElement.textContent = newValue;
            listElement.classList.remove('dropdown__list_active');
        });
    });
});
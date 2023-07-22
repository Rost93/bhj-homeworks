document.addEventListener("DOMContentLoaded", function () {
  const fontSizeElements = document.querySelectorAll(".font-size");

  fontSizeElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();

      // 1. Удалить класс font-size_active у всех элементов
      fontSizeElements.forEach(function (el) {
        el.classList.remove("font-size_active");
      });

      // 2. Получить значение атрибута data-size
      const newSize = element.getAttribute("data-size");

      // 3. Установить новый размер шрифта для элемента с классом book
      const bookElement = document.getElementById("book");
      bookElement.classList.remove("book_fs-big", "book_fs-small");
      if (newSize === "big") {
        bookElement.classList.add("book_fs-big");
      } else if (newSize === "small") {
        bookElement.classList.add("book_fs-small");
      }

      // 4. Добавить класс font-size_active только к выбранному элементу
      element.classList.add("font-size_active");
    });
  });
});

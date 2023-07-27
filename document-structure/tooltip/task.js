document.addEventListener("DOMContentLoaded", function () {
  const hasTooltipElements = document.querySelectorAll(".has-tooltip");

  hasTooltipElements.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();

      const tooltip = document.querySelector(".tooltip");

      // Проверяем, есть ли у подсказки класс tooltip_active
      const isActive = tooltip.classList.contains("tooltip_active");

      // Удаляем класс tooltip_active у всех подсказок
      document.querySelectorAll(".tooltip").forEach((tooltip) => {
        tooltip.classList.remove("tooltip_active");
      });

      // Если подсказка неактивна, активируем её для текущего элемента
      if (!isActive) {
        tooltip.textContent = element.getAttribute("title");
        tooltip.classList.add("tooltip_active");

        // Позиционируем подсказку рядом с элементом
        const rect = element.getBoundingClientRect();
        tooltip.style.top = rect.top + rect.height + "px";
        tooltip.style.left = rect.left + "px";
      }
    });
  });
});

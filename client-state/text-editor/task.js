const editor = document.getElementById('editor');

// При загрузке страницы
window.addEventListener('load', () => {
  // Попытка получить значение редактора из локального хранилища
  const savedText = localStorage.getItem('editorText');
  
  // Если значение есть, устанавливаем его в редактор
  if (savedText) {
    editor.value = savedText;
  }
});

// При изменении содержимого редактора
editor.addEventListener('input', () => {
  // Сохраняем значение редактора в локальное хранилище
  localStorage.setItem('editorText', editor.value);
});

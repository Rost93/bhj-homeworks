const editor = document.getElementById('editor');

// При загрузке страницы
window.addEventListener('load', () => {
  // Получаем значение редактора из локального хранилища
  const savedText = localStorage.getItem('editorText');
  
  // Устанавливаем значение редактора из локального хранилища
  editor.value = savedText;
});

// При изменении содержимого редактора
editor.addEventListener('input', () => {
  // Сохраняем значение редактора в локальное хранилище
  localStorage.setItem('editorText', editor.value);
});

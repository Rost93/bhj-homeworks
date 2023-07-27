// task.js
document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('task__input');
  const tasksForm = document.getElementById('tasks__form');
  const tasksList = document.getElementById('tasks__list');

  // Загружаем сохраненные задачи из локального хранилища (если есть)
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  for (const task of savedTasks) {
    addTaskToDOM(task);
  }

  // Обработчик события для формы добавления задачи
  tasksForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskTitle = taskInput.value.trim();
    if (taskTitle !== '') {
      addTaskToDOM(taskTitle);
      taskInput.value = '';
    }
  });

  // Обработчик события для кнопки удаления задачи
  tasksList.addEventListener('click', function(event) {
    if (event.target.classList.contains('task__remove')) {
      const taskElement = event.target.parentElement;
      removeTaskFromDOM(taskElement);
    }
  });

  // Функция добавления новой задачи в DOM и сохранение в локальное хранилище
  function addTaskToDOM(title) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskTitleElement = document.createElement('div');
    taskTitleElement.classList.add('task__title');
    taskTitleElement.textContent = title;

    const removeButton = document.createElement('a');
    removeButton.href = '#';
    removeButton.classList.add('task__remove');
    removeButton.textContent = '×';

    taskElement.appendChild(taskTitleElement);
    taskElement.appendChild(removeButton);
    tasksList.appendChild(taskElement);

    // Сохраняем задачу в локальное хранилище
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(title);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  }

  // Функция удаления задачи из DOM и обновление локального хранилища
  function removeTaskFromDOM(taskElement) {
    const title = taskElement.querySelector('.task__title').textContent;
    taskElement.remove();

    // Удаляем задачу из локального хранилища
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = savedTasks.filter(task => task !== title);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
});

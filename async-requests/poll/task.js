// Функция для выполнения GET-запроса и отображения опроса
function fetchPoll() {
  fetch('https://students.netoservices.ru/nestjs-backend/poll')
    .then(response => response.json())
    .then(data => displayPoll(data))
    .catch(error => console.error('Error fetching poll:', error));
}

// Функция для отображения опроса и ответов
function displayPoll(pollData) {
  const pollTitleElement = document.getElementById('poll__title');
  const pollAnswersElement = document.getElementById('poll__answers');

  pollTitleElement.textContent = pollData.data.title;

  // Очищаем список ответов
  pollAnswersElement.innerHTML = '';

  // Создаем кнопки для каждого ответа
  pollData.data.answers.forEach(answer => {
    const answerButton = document.createElement('button');
    answerButton.className = 'poll__answer';
    answerButton.textContent = answer;
    answerButton.addEventListener('click', () => handleAnswerClick(pollData.id, answer));
    pollAnswersElement.appendChild(answerButton);
  });
}

// Функция для обработки клика по кнопке ответа
function handleAnswerClick(pollId, selectedAnswer) {
  // Выводим диалоговое окно с сообщением
  alert('Спасибо, ваш голос засчитан за ответ: ' + selectedAnswer);

  // Дополнительно можно отправить POST-запрос с выбранным ответом на сервер
  // для сохранения результатов опроса.
}

// Выполняем загрузку опроса при запуске скрипта
fetchPoll();


// Функция для обработки клика по кнопке ответа
function handleAnswerClick(pollId) {
  alert('Спасибо, ваш голос засчитан!');
}

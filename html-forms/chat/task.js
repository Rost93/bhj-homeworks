document.addEventListener('DOMContentLoaded', function () {
  const chatWidget = document.querySelector('.chat-widget');
  const chatMessages = document.querySelector('.chat-widget__messages');
  const robotResponses = [
    'Здарова, все операторы занеты. Не пиши сюда больше?',
    'Я не буду отвечать тебе на вопрос',
    'Ищи человека, мне нет дела до твоих проблем.',
    'Ты не знаешь где можно найти Жору Корнего?',
    'Разговор окончен, я сказал!', 
    'Здраствуйте, простите за минутную слабость, чем могу быть полезен?'
  ];

  let isRobotTyping = false;

  function getCurrentTime() {
    const now = new Date();
    return now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
  }

  function sendMessage(messageText, isClient) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `
      <div class="message__time">${getCurrentTime()}</div>
      <div class="message__text">${messageText}</div>
    `;
    if (isClient) {
      messageDiv.classList.add('message_client');
      isRobotTyping = true; // Ответ робота на сообщение
      setTimeout(function () {
        const randomIndex = Math.floor(Math.random() * robotResponses.length);
        sendMessage(robotResponses[randomIndex], false);
        isRobotTyping = false;
      }, 1000);
    }
    chatMessages.appendChild(messageDiv);
  }

  chatWidget.addEventListener('click', function () {
    // Открытие окно чата при клике на красный боковой бэйдж
    chatWidget.classList.add('chat-widget_active');
  });

  document.addEventListener('keydown', function (event) {
    //Отправка сообщения при нажатии Enter
    if (event.key === 'Enter') {
      const inputField = document.getElementById('chat-widget__input');
      const messageText = inputField.value.trim();
      if (messageText !== '') {
        sendMessage(messageText, true);
        inputField.value = '';
      }
    }
  });

  setTimeout(function () {
    sendMessage(robotResponses[0], false);
  }, 1000);
});

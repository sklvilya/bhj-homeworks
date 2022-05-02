const openChatButton = document.querySelector('.chat-widget');

function openChat() {
  openChatButton.classList.add('chat-widget_active');
}

openChatButton.addEventListener('click', openChat);

const chatWidgetInput = document.getElementById('chat-widget__input');

const botMessages = [
  'Здравствуйте!',
  'Слышь, ты, а ну иди сюда...',
  'До свидания!',
  'Вы адекватный?!',
  'Мы не продаем роботов-пылесосов',
  'Это прошлая коллекция',
  'Мне не нравится Ваш тон',
  'Сменим тему?',
  'Что?',
  'К сожалению, все операторы сейчас заняты. Опишите проблему в сообщении. Мы обязательно ответим.',
  'базарчик :)',
]

function sendMessage() {
  let getData = new Date();
  getData = getData.toString().slice(16, 21);

  document.getElementById('chat-widget__messages').innerHTML += `
    <div class="message message_client">
      <div class="message__time">${getData}</div>
      <div class="message__text">
        ${chatWidgetInput.value}
      </div>
    </div>
    `;

  chatWidgetInput.value = '';

  function botReply() {
    let reply;
    if (Array.from(document.querySelectorAll('.message')).length < 2) {
      reply = botMessages[0];
    } else {
      reply = botMessages[Math.floor(Math.random() * botMessages.length)];
    }
    document.getElementById('chat-widget__messages').innerHTML += `
        <div class="message">
          <div class="message__time">${getData}</div>
          <div class="message__text">
            ${reply}
          </div>
        </div>
        `;
  }

  setTimeout(botReply, 1000);
}

chatWidgetInput.addEventListener('change', sendMessage);
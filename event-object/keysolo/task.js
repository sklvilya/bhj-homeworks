class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.countDown;

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
    let inputedSymbol;
    let current = this;

    function setEnteredSymbol(event) {
      let symbol = current.currentSymbol.textContent.toUpperCase();
      inputedSymbol = String.fromCharCode(event.keyCode);
      symbol == inputedSymbol ? current.success() : current.fail();
    }
    document.addEventListener('keydown', setEnteredSymbol);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    clearInterval(this.countDown);
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    clearInterval(this.countDown);
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.countDown = setInterval(() => {
      this.countTime();
    }, 1000);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);
    document.getElementById('timer').textContent = words[index].length;

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
        `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  countTime() {
    let timer = document.getElementById('timer');
    timer.textContent--;
    let time = Number(timer.innerHTML);
    if (time === 0) {
      this.fail();
    }
  }
}

new Game(document.getElementById('game'))
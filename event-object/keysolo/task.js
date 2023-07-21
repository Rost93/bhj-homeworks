class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = '0';
    this.lossElement.textContent = '0';
  }

  registerEvents() {
    // Получаем DOM-элемент текущего символа
    const currentSymbolElement = document.querySelector('.current-symbol');

    // Добавляем обработчик события keydown
    document.addEventListener('keydown', (event) => {
      // Получаем символ, который был введён с клавиатуры
      const enteredSymbol = event.key.toLowerCase();

      // Получаем текущий символ для игры
      const currentSymbol = this.currentSymbol.textContent.toLowerCase();

      // Сравниваем введенный символ с текущим символом игры
      if (enteredSymbol === currentSymbol) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  handleWin() {
    if (parseInt(this.winsElement.textContent) === 10) {
      alert('Поздравляем! Вы победили!');
      this.reset();
    }
  }

  handleLoss() {
    if (parseInt(this.lossElement.textContent) === 3) {
      alert('Вы проиграли! Попробуйте ещё раз.');
      this.reset();
    }
  }

  success() {
    this.currentSymbol.classList.remove('symbol_current');
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
    } else {
      this.winsElement.textContent = parseInt(this.winsElement.textContent) + 1;
      this.handleWin();
      this.setNewWord();
    }
  }

  fail() {
    this.lossElement.textContent = parseInt(this.lossElement.textContent) + 1;
    this.handleLoss();
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
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
}

new Game(document.getElementById('game'));
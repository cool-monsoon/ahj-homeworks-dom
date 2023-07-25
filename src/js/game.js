export default class Game {
  constructor(goblin, areaSize) {
    this.goblin = goblin;
    this.areaSize = areaSize;
  }

  createArea() {
    this.name = 'createArea';
    const body = document.getElementsByTagName('body');
    const area = '<div class="area_container"></div>';
    body.insertAdjacentHTML('afterbegin', area);
  }

  createCells() {
    const size = this.areaSize;
    const gameArea = document.querySelector('.area_container');
    for (let i = 0; i < size ** 2; i += 1) {
      const cell = '<div class="cell"></div>';
      gameArea.insertAdjacentHTML('beforeend', cell);
    }
  }

  randomPosition(min, max) {
    this.name = 'randomPosition';
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createGoblin() {
    const img = document.createElement('img');
    img.src = this.goblin;
    img.className = 'img_goblin';
    return img;
  }

  insertGoblin(img) {
    const min = 0;
    const max = this.areaSize ** 2;
    const i = this.randomPosition(min, max);
    const cells = document.querySelectorAll('.cell');
    const cell = cells[i];
    cell.append(img);
  }

  start() {
    this.createArea();
    this.createCells();
    const img = this.createGoblin();

    setInterval(() => {
      this.insertGoblin(img);
    }, 1000);
  }
}

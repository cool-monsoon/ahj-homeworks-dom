export default class Game {
  constructor(goblin, areaSize) {
    this.goblin = goblin;
    this.areaSize = areaSize;
  }

  createArea() {
    const size = this.areaSize;
    const area = document.createElement('div');
    for (let i = 0; i < size ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      area.append(cell);
    }
    area.className = 'area_container';
    return area;
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
    const img = this.createGoblin();

    setInterval(() => {
      this.insertGoblin(img);
    }, 1000);
  }
}

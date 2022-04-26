class OhIlNam {
  constructor(game) {
    this.game = game;
    this.x = 230;
    this.y = 600;
    this.width = 40;
    this.height = 50;
    this.lifes = 10;
    this.img = new Image();
  }
  draw() {
    this.img.src = '/docs/imgs/squid.jpg';
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 60;
    this.y -= 50;
  }
  moveRight() {
    this.x += 60;
    this.y -= 50;
  }

  beginLeft() {
    this.x -= 30;
    this.y -= 50;
  }

  beginRight() {
    this.x += 30;
    this.y -= 50;
  }

  moveUpLeft() {
    this.y -= 50;
  }

  moveUpRight() {
    this.y -= 50;
  }
}

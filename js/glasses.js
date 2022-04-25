class Paths {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 40;
    this.path = null;
  }
  
  //

  arrayPath() {
    this.path = [
      [
        { x: 200, y: 100 },
        { x: 260, y: 100 },
      ],
      [
        { x: 200, y: 150 },
        { x: 260, y: 150 },
      ],
      [
        { x: 200, y: 200 },
        { x: 260, y: 200 },
      ],
      [
        { x: 200, y: 250 },
        { x: 260, y: 250 },
      ],
      [
        { x: 200, y: 300 },
        { x: 260, y: 300 },
      ],
      [
        { x: 200, y: 350 },
        { x: 260, y: 350 },
      ],
      [
        { x: 200, y: 400 },
        { x: 260, y: 400 },
      ],
      [
        { x: 200, y: 450 },
        { x: 260, y: 450 },
      ],
      [
        { x: 200, y: 500 },
        { x: 260, y: 500 },
      ],
      [
        { x: 200, y: 550 },
        { x: 260, y: 550 },
      ],
    ];
  }

  isPosBreakableGlass(x, y) {
    //Vereficar se x e y pertence a alguma posicao do path que é breakable glass
    //if true ou false
  }

  random() {
    this.path.forEach((pair) => {
      let randomNumber = Math.round(Math.random());
      pair[randomNumber].isBreakable = true;
    });
  }

  draw() {
  }
}

class Wall {
    constructor(x, y, endX, endY) {
        this.width = 8;
        this.color = 'black';
        this.x = x;
        this.y = y;
        this.wWidth = Math.abs(endX, this.x)
        this.wHeight = Math.abs(endY, startY);
    }


    display() {
        fill(this.color);
        rect(this.x, this.startY, this.width, this.wHeight)
    }
}

let car1;
let w1, w2, w3, w4;
console.log('start')
function setup() {
    createCanvas(800, 800);
    console.log('Application running.')
    car1 = new Car('black', 100, 100)
    w1 = new Wall(50, 0, 400, 0);
    w2 = new Wall(150, 0, 500, 0)
    console.log({ car1 });
    console.log({ w1, w2 })
}

function draw() {
    background('beige');
    car1.display();
    w1.display();
    w2.display();
}
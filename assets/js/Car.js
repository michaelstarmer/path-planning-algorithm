class Car {
    constructor(cColor, x, y) {
        this.color = cColor;
        this.x = x;
        this.y = y;
        console.log('Car initialized.')
    }

    display() {
        fill(this.color);
        rect(this.x, this.y, 20, 10);
    }
}


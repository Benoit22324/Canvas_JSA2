import Shape from "./Shape.js";

export default class Rectangle extends Shape {
    width;
    height;

    constructor(x, y, width, height, color) {
        super(x, y, color);

        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
    }
}
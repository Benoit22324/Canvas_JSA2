// Import
import Rectangle from "./classes/Rectangle.js";
import Circle from "./classes/Circle.js";
import { getRandomNumber, getRandomColor } from "../utils/random.js";
import { cursorPos } from "../utils/cursorPos.js";

// Variables
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Instances test
new Rectangle(100, 100, 200, 100, 'blue').draw(context);
new Circle(300, 300, 20, 'red').draw(context);

// Apparitions lors d'un clique sur le Canvas
canvas.addEventListener('click', (e) => {
    const cursor = cursorPos(canvas, e);
    const rng = getRandomNumber(1, 2);

    if (rng === 1) {
        const radius = getRandomNumber(10, 30);

        new Circle(cursor.x, cursor.y, radius, getRandomColor()).draw(context);
    }
    else if (rng === 2) {
        const width = getRandomNumber(50, 200);
        const height = getRandomNumber(50, 200);
        const x = cursor.x - width / 2;
        const y = cursor.y - height / 2;

        new Rectangle(x, y, width, height, getRandomColor()).draw(context);
    }
})
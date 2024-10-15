// Import
import Rectangle from "./classes/Rectangle.js";
import Circle from "./classes/Circle.js";
import { getRandomNumber, getRandomColor } from "../utils/random.js";

// Variables
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Instances test
new Rectangle(100, 100, 200, 100, 'blue').draw(context);
new Circle(300, 300, 20, 'red').draw(context);

// Apparitions lors d'un clique sur le Canvas
canvas.addEventListener('click', (e) => {
    const rng = getRandomNumber(1, 2);
    if (rng === 1) new Circle(e.clientX, e.clientY, getRandomNumber(5, 30), getRandomColor()).draw(context);
    else if (rng === 2) new Rectangle(e.clientX, e.clientY, getRandomNumber(50, 200), getRandomNumber(50, 200), getRandomColor()).draw(context);
})
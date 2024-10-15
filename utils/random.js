export const getRandomNumber = (min, max) => {
    let number = Math.floor(Math.random() * (max + 1));
    return number >= min ? number : min;
}

export const getRandomColor = () => {
    return `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`
}
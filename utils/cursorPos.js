export const cursorPos = (canvas, event) => {
    let rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;

    return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    }
}

// Source : https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
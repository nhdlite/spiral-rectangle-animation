'use strict';

window.onload = () => {
    const rectangle = new Rectangle(5, 5);
    const width = 80;
    const height = 80;
    const maxWidth = 400;
    const maxHeight = 400;

    const canvas = document.getElementById('drawRegion');
    const context = canvas.getContext('2d');
    
    setInterval(() => {
        const coordinates = rectangle.getNextRectangleCoordinates();

        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, maxWidth, maxHeight);

        context.fillStyle = '#0000ff';
        context.fillRect(coordinates.xCoordinate * width, coordinates.yCoordinate * height, width, height);
    }, 100)
}

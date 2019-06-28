'use strict';

window.onload = () => {
    const width = 10;
    const height = 10;
    const maxWidth = window.outerWidth;
    const maxHeight = window.outerHeight;
    const rows = Math.ceil(maxHeight / height);
    const columns = Math.ceil(maxWidth / width);
    const rectangle = new Rectangle(rows, columns);

    const canvas = document.getElementById('drawRegion');
    canvas.width = maxWidth;
    canvas.height = maxHeight;
    const context = canvas.getContext('2d');
    
    setInterval(() => {
        const coordinates = rectangle.getNextRectangleCoordinates();
        
        context.fillStyle = '#0000ff';
        context.fillRect(coordinates.xCoordinate * width, coordinates.yCoordinate * height, width, height);

        if (rectangle.visitedElements === rectangle.totalElements) {
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, maxWidth, maxHeight);
        }
    }, 10)
}

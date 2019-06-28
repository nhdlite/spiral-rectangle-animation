'use strict';

class Rectangle {
    constructor(rows, columns) {
        this.totalElements = rows * columns;
        this.originalRowSize = rows;
        this.originalColumnSize = columns;
        this.currentRowIndex = 0;
        this.currentColumnIndex = 0;
        this.visitedElements = 0;
        this.minRow = 0;
        this.minColumn = 0;
        this.maxRow = this.originalRowSize;
        this.maxColumn = this.originalColumnSize;

        this.rectangle = new Array(this.originalRowSize).fill(new Array(this.originalColumnSize));

        this.directions = ['D', 'R', 'U', 'L'];
        this.currentDirectionIndex = 0;
    }

    reset() {
        this.currentRowIndex = 0;
        this.currentColumnIndex = 0;
        this.visitedElements = 0;
        this.minRow = 0;
        this.minColumn = 0;
        this.maxRow = this.originalRowSize;
        this.maxColumn = this.originalColumnSize;
        this.currentDirectionIndex = 0;
    }

    move() {
        const direction = this.directions[this.currentDirectionIndex];
        if (direction === 'D') {
            this.currentRowIndex++;
        } else if (direction === 'R') {
            this.currentColumnIndex++;
        } else if (direction === 'U') {
            this.currentRowIndex--;
        } else if (direction === 'L') {
            this.currentColumnIndex--;
        } else {
            console.log('We should not have ended up here.')
        }
    }

    getNextRectangleCoordinates() {
        // Reset if we have visited all the elements in the 2DArray
        if(this.visitedElements >= this.totalElements) {
            this.reset();
        }

        // Return coordinates that can be drawn on a reverse cartesian coordinates
        const currentCoordinates = {
            xCoordinate: this.currentColumnIndex,
            yCoordinate:  this.currentRowIndex,
        };
        this.visitedElements++;

        const direction = this.directions[this.currentDirectionIndex];
        if (direction === 'D') {
            if (this.currentRowIndex + 1 < this.maxRow) {
                this.move();
            } else {
                this.currentDirectionIndex = ++this.currentDirectionIndex % (this.directions.length);
                this.minColumn++;
                this.move();
            }
        } else if (direction === 'R') {
            if (this.currentColumnIndex + 1 < this.maxColumn) {
                this.move();
            } else {
                this.currentDirectionIndex = ++this.currentDirectionIndex % (this.directions.length);
                this.maxRow--;
                this.move();
            }
        } else if (direction === 'U') {
            if (this.currentRowIndex - 1 >= this.minRow) {
                this.move();
            } else {
                this.currentDirectionIndex = ++this.currentDirectionIndex % (this.directions.length);
                this.maxColumn--;
                this.move();
            }
        } else if (direction === 'L') {
            if (this.currentColumnIndex - 1 >= this.minColumn) {
                this.move();
            } else {
                this.currentDirectionIndex = ++this.currentDirectionIndex % (this.directions.length);
                this.minRow++;
                this.move();
            }
        } else {
            console.log('We should not have ended up here.')
        }

        return currentCoordinates;
    }
}

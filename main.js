'use strict';

class Rectangle {
    constructor(rows, columns) {
        this.originalRowSize = rows;
        this.originalColumnSize = columns;
        this.currentRowIndex = 0;
        this.currentColumnIndex = 0;
        this.minRow = 0;
        this.minColumn = 0;
        this.maxRow = this.originalRowSize;
        this.maxColumn = this.originalColumnSize;

        this.rectangle = new Array(this.originalRowSize).fill(new Array(this.originalColumnSize).fill(false)); // Will turn to true as we visit each index

        this.directions = ['D', 'R', 'L', 'U'];
        this.currentDirectionIndex = 0;
    }

    reset() {
        this.currentRowIndex = 0;
        this.currentColumnIndex = 0;
        this.minRow = 0;
        this.minColumn = 0;
        this.maxRow = this.originalRowSize;
        this.maxColumn = this.originalColumnSize;
        this.currentDirectionIndex = 0;
        this.rectangle = new Array(this.originalRowSize).fill(new Array(this.originalColumnSize).fill(false));
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
        // Check if visited. This means that the spiral has looped on itself and needs to be reset
        debugger;
        if(this.rectangle[this.currentRowIndex][this.currentColumnIndex]) {
            this.reset();
        }

        const currentCoordinates = {
            xCoordinate: this.currentRowIndex, // The row
            yCoordinate:  this.currentColumnIndex, // The column
        };
        this.rectangle[this.currentRowIndex][this.currentColumnIndex] = true;

        const direction = this.directions[this.currentDirectionIndex];
        if (direction === 'D') {
            if (this.currentRowIndex + 1 < this.maxRow) {
                this.move();
            } else {
                this.currentDirectionIndex = ++this.currentColumnIndex % (this.directions.length - 1);
                this.minColumn++;
                this.move();
            }
        } else if (direction === 'R') {
            if (this.currentColumnIndex + 1 < this.maxColumn) {
                this.move();
            } else {
                this.currentDirectionIndex = ++this.currentColumnIndex % (this.directions.length - 1);
                this.maxRow--;
                this.move();
            }
        } else if (direction === 'U') {
            if (this.currentRowIndex - 1 >= this.minRow) {
                this.move();
            } else {
                this.currentDirectionIndex = ++this.currentColumnIndex % (this.directions.length - 1);
                this.maxColumn--;
                this.move();
            }
        } else if (direction === 'L') {
            if (this.currentColumnIndex - 1 >= this.minColumn) {
                this.move();
            } else {
                this.currentDirectionIndex = ++this.currentColumnIndex % (this.directions.length - 1);
                this.minRow++;
                this.move();
            }
        } else {
            console.log('We should not have ended up here.')
        }

        return currentCoordinates;
    }
}


/**
 * TicTacToe Game Logic
 * 
 * This module contains the core logic for a TicTacToe game. It includes methods for managing the game board,
 * checking for wins, draws, and valid moves, as well as handling computer moves in a Player vs Computer mode.
 * 
 * Author: Adiboshi Shalom and John Wirth
 * Date: May 4, 2025
 */

export class TicTacToe {
    // The game board, initialized with numbers representing available spots
    board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];

    /**
     * Prints the current state of the board to the console.
     */
    printBoard() {
        console.log("Current board:");
        for (let i = 0; i < this.board.length; i++) {
            console.log(this.board[i].join(" | "));
        }
    }

    /**
     * Checks if a specific cell on the board is free.
     * @param {number} row - The row index of the cell.
     * @param {number} col - The column index of the cell.
     * @returns {boolean} True if the cell is free, false otherwise.
     */
    checkFreeSpace(row, col) {
        return this.board[row][col] !== "X" && this.board[row][col] !== "O";
    }

    /**
     * Generates a random number between the given min and max values (inclusive).
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} A random number between min and max.
     */
    getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * Handles the computer's move by randomly selecting a free spot on the board.
     */
    compPick() {
        let moveDone = false;
        while (!moveDone) {
            let randomPick1 = this.getRandomNum(0, 2);
            let randomPick2 = this.getRandomNum(0, 2);

            if (this.checkFreeSpace(randomPick1, randomPick2)) {
                this.board[randomPick1][randomPick2] = "O";
                moveDone = true;
            }
        }
    }

    /**
     * Checks if there is a winning condition on the board.
     * @returns {boolean} True if there is a winner, false otherwise.
     */
    checkWin() {
        for (let i = 0; i < 3; i++) {
            // Rows
            if (
                this.board[i][0] === this.board[i][1] &&
                this.board[i][1] === this.board[i][2] &&
                (this.board[i][0] === "X" || this.board[i][0] === "O")
            ) return true;

            // Columns
            if (
                this.board[0][i] === this.board[1][i] &&
                this.board[1][i] === this.board[2][i] &&
                (this.board[0][i] === "X" || this.board[0][i] === "O")
            ) return true;
        }

        // Diagonals
        if (
            this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2] &&
            (this.board[0][0] === "X" || this.board[0][0] === "O")
        ) return true;

        if (
            this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0] &&
            (this.board[0][2] === "X" || this.board[0][2] === "O")
        ) return true;

        return false;
    }

    /**
     * Converts a spot number (1-9) to its corresponding row and column indices.
     * @param {number} spot - The spot number (1-9).
     * @returns {number[]} An array containing the row and column indices.
     */
    spotLocationCheck(spot) {
        let xCord = Math.floor((spot - 1) / 3);
        let yCord = (spot - 1) % 3;
        return [xCord, yCord];
    }

    /**
     * Checks if the game is a draw (no free spaces left).
     * @returns {boolean} True if the game is a draw, false otherwise.
     */
    checkDraw() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.board[row][col] !== "X" && this.board[row][col] !== "O") {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Checks if a move is valid (within bounds and on a free space).
     * @param {number} row - The row index of the move.
     * @param {number} col - The column index of the move.
     * @returns {boolean} True if the move is valid, false otherwise.
     */
    checkValidMove(row, col) {
        return row >= 0 && row < 3 && col >= 0 && col < 3 && this.checkFreeSpace(row, col);
    }

    /**
     * Prints the game menu to the console.
     */
    printMenu() {
        console.log("1. Player vs Player");
        console.log("2. Player vs Computer");
        console.log("999. Exit Game");
    }

    /**
     * Returns the current state of the board.
     * @returns {string[][]} The game board.
     */
    getBoard() {
        return this.board;
    }

    /**
     * Modifies the board at the specified coordinates with the given value.
     * @param {number} xCord - The row index.
     * @param {number} yCord - The column index.
     * @param {string} modVal - The value to place on the board ("X" or "O").
     */
    modifyBoard(xCord, yCord, modVal) {
        this.board[xCord][yCord] = modVal;
    }

    /**
     * Prompts the player to select a valid spot and updates the board.
     * @param {string} playerSymbol - The player's symbol ("X" or "O").
     */
    getValidSpot(playerSymbol) {
        let spot = parseInt(prompt("Select a spot (1-9):"));
        while (spot < 1 || spot > 9) {
            spot = parseInt(prompt("Select a valid spot (1-9):"));
        }

        let isValid = false;
        while (!isValid) {
            const [x, y] = this.spotLocationCheck(spot);
            if (!this.checkValidMove(x, y)) {
                spot = parseInt(prompt("Spot taken. Select another:"));
                continue;
            }
            this.modifyBoard(x, y, playerSymbol);
            isValid = true;
        }
    }

    /**
     * Resets the board to its initial state.
     */
    resetBoard() {
        this.board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    }
}

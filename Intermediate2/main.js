/**
 * TicTacToe Game Interface
 * 
 * This script provides the user interface and interaction logic for the TicTacToe game. 
 * It handles rendering the game board, processing user input, and managing game modes 
 * (Player vs Player and Player vs Computer). It also displays game status messages 
 * and resets the game when needed.
 * 
 * Author: Adiboshi Shalom and John Wirth
 * Date: May 4, 2025
 */

import { TicTacToe } from './code.js';

const game = new TicTacToe();
const boardElement = document.getElementById('board');
const messageElement = document.getElementById('message');
let currentPlayer = 'X';
let gameMode = null;

/**
 * Renders the current state of the game board in the UI.
 */
function renderBoard() {
    boardElement.innerHTML = '';
    const board = game.getBoard();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = board[i][j];
            if (board[i][j] === 'X' || board[i][j] === 'O') {
                cell.classList.add('taken');
            } else {
                cell.addEventListener('click', () => handleCellClick(i, j));
            }
            boardElement.appendChild(cell);
        }
    }
}

/**
 * Handles a player's move when a cell is clicked.
 * @param {number} row - The row index of the clicked cell.
 * @param {number} col - The column index of the clicked cell.
 */
function handleCellClick(row, col) {
    if (!game.checkFreeSpace(row, col)) {
        messageElement.textContent = 'Spot already taken. Choose another.';
        return;
    }
    game.modifyBoard(row, col, currentPlayer);
    if (game.checkWin()) {
        messageElement.textContent = `Game Over! ${currentPlayer} wins!`;
        disableBoard();
        return;
    }
    if (game.checkDraw()) {
        messageElement.textContent = "Game Over! It's a draw!";
        disableBoard();
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageElement.textContent = `It's ${currentPlayer}'s turn.`;
    renderBoard();

    if (gameMode === 'computer' && currentPlayer === 'O') {
        setTimeout(() => {
            game.compPick();
            if (game.checkWin()) {
                messageElement.textContent = 'Game Over! Computer wins!';
                disableBoard();
                return;
            }
            if (game.checkDraw()) {
                messageElement.textContent = "Game Over! It's a draw!";
                disableBoard();
                return;
            }
            currentPlayer = 'X';
            messageElement.textContent = "It's your turn.";
            renderBoard();
        }, 500);
    }
}

/**
 * Disables the game board to prevent further moves after the game ends.
 */
function disableBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.add('taken'));
}

/**
 * Resets the game to its initial state.
 */
function resetGame() {
    game.resetBoard();
    currentPlayer = 'X';
    messageElement.textContent = '';
    renderBoard();
}

/**
 * Event listeners for game mode selection and reset button.
 */
document.getElementById('player-vs-player').addEventListener('click', () => {
    gameMode = 'player';
    resetGame();
    messageElement.textContent = "Player vs Player mode. It's X's turn.";
});

document.getElementById('player-vs-computer').addEventListener('click', () => {
    gameMode = 'computer';
    resetGame();
    messageElement.textContent = "Player vs Computer mode. It's X's turn.";
});

document.getElementById('reset-game').addEventListener('click', resetGame);

// Initial render of the game board
renderBoard();


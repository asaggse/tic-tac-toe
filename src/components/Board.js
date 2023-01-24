import React, { useState } from "react";

const Board = ({ currentPlayer, gameOver, onWin, onReset, setCurrentPlayer }) => {
    // Initialize state
    const [board, setBoard] = useState(Array(9).fill(null));

    // Handle cell click
    const handleClick = (index) => {
        if (gameOver) return;
        if (board[index]) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;

        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

        // Check for win
        checkWin(newBoard);
    }

    // Check for win
    const checkWin = (newBoard) => {
        // Winning combinations
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                onWin(currentPlayer);
                return;
            }
        }
        // check for draw
        if (newBoard.every(cell => cell !== null)) {
            onWin("draw");
        }
    }

    // Handle reset button
    const handleReset = () => {
        setBoard(Array(9).fill(null));
        onReset();
    }

    // Render the board
    return (
        <div>
            <div className="board">
                {board.map((cell, index) => (
                    <div className="cell" key={index} onClick={() => handleClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Board;


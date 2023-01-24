import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
    // Initialize state
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState({ X: 0, O: 0 });

    // Handle win
    const handleWin = (winner) => {
        setGameOver(true);
        setScore((prevScore) => ({ ...prevScore, [winner]: prevScore[winner] + 1 }));
    }

    // Handle reset
    const handleReset = () => {
        setCurrentPlayer("X");
        setGameOver(false);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Tic Tac Toe</h1>
            <p>Current player: {currentPlayer}</p>
            <p>Score: X: {score.X} O: {score.O}</p>
            <Board currentPlayer={currentPlayer} gameOver={gameOver} onWin={handleWin} onReset={handleReset} setCurrentPlayer={setCurrentPlayer} />
        </div>
    );
}

export default Game;

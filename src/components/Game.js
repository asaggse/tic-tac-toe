import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
    // Initialize state
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState({ X: 0, O: 0 });
    const [winner, setWinner] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Handle win
    const handleWin = (winner) => {
        setGameOver(true);
        setWinner(winner);
        setShowModal(true);
        setScore((prevScore) => ({ ...prevScore, [winner]: prevScore[winner] + 1 }));
    }

    // Handle reset
    const handleReset = () => {
        setCurrentPlayer("X");
        setGameOver(false);
        setWinner(null);
        setShowModal(false);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Tic Tac Toe</h1>
            <p>Current player: {currentPlayer}</p>
            <p>Score: X: {score.X} O: {score.O}</p>
            <Board currentPlayer={currentPlayer} gameOver={gameOver} onWin={handleWin} onReset={handleReset} setCurrentPlayer={setCurrentPlayer} />
            {showModal && (
                <div style={{ position: "fixed", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
                        <h2>{winner} wins!</h2>
                        <button onClick={handleReset}>Play again</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;

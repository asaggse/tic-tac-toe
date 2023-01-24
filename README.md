## Tic Tac Toe Game

A simple Tic Tac Toe game built with React.

### How to run the game

1. Clone the repository
```
git clone https://github.com/asaggse/tic-tac-toe
```
2. Install the dependencies
```
npm install
```
3. Start the development server
```
npm start
```
4. Open your browser and go to `http://localhost:3000`

### How to play
* The game is a two-player game where each player takes turns marking a grid of 3x3 cells with X and O, trying to make a line horizontally, vertically, or diagonally.
* The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.
* The game will detect a draw if the board is full and no one wins.
* The game has a reset button that allows you to start a new game.

### How the game works

The game is built with React, and it is divided into three components:

* `App` component is the root component that renders the `Game` component.
* `Game` component holds the overall state of the game and renders the `Board` component.
* `Board` component renders the Tic Tac Toe board and handles the game logic such as alternating the players, checking for win or draw conditions, and updating the board state.

It is important to add CSS styles to make the Tic Tac Toe game look more visually appealing and to improve the game functionality.

### Contributions
This project is open to contributions, feel free to fork the project and make a pull request with your changes.

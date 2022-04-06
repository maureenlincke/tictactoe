import "./styles.css";
import { useState } from "react";

export default function App() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  const [player, setPlayer] = useState("X");

  function gamePlay(player, index) {
    board[index] = player;

    if (hasWon() === true) return;

    if (player === "X") setPlayer("Y");
    else setPlayer("X");

    return board;
  }

  function hasWon() {
    let winner = false;
    if (
      (board[0] === board[1] && board[0] === board[2] && board[0] !== null) ||
      (board[3] === board[4] && board[3] === board[5] && board[3] !== null) ||
      (board[6] === board[7] && board[6] === board[8] && board[6] !== null) ||
      (board[0] === board[3] && board[0] === board[6] && board[0] !== null) ||
      (board[1] === board[4] && board[1] === board[7] && board[1] !== null) ||
      (board[2] === board[5] && board[2] === board[8] && board[2] !== null) ||
      (board[0] === board[4] && board[0] === board[8] && board[0] !== null) ||
      (board[2] === board[4] && board[2] === board[6] && board[2] !== null)
    ) {
      winner = true;
      setBoard([null, null, null, null, null, null, null, null, null]);
    }
    return winner;
  }

  return (
    <div className="App">
      <div className="grid">
        {board ? (
          board.map((space, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  let playersMove = gamePlay(player, index);
                  console.log(playersMove);
                  setBoard(playersMove);
                }}
              >
                {space}
              </div>
            );
          })
        ) : (
          <div>{player} has won!</div>
        )}
      </div>
    </div>
  );
}

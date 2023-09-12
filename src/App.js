import { useState } from "react";
import "./App.css";

function App() {
  const [turn, setturn] = useState("X");
  const [boxes, setboxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setwinner] = useState(null);

  const checkWinner = () => {
    for (let i = 0; i < 9; i += 3) {
      if (boxes[i] != "") {
        let elem = boxes[i];
        let gadbad = false;
        for (let j = i; j < i + 3; j++) {
          if (boxes[j] !== elem) {
            gadbad = true;
            break;
          }
        }
        if (!gadbad) {
          return true;
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      if (boxes[i] != "") {
        let elem = boxes[i];
        let gadbad = false;
        for (let j = i; j < 9; j += 3) {
          if (boxes[j] !== elem) {
            gadbad = true;
            break;
          }
        }
        if (!gadbad) {
          return true;
        }
      }
    }
    if (boxes[0] != "") {
      let elem = boxes[0];
      let gadbad = false;
      for (let j = 0; j < 9; j += 4) {
        if (boxes[j] !== elem) {
          gadbad = true;
          break;
        }
      }
      if (!gadbad) {
        return true;
      }
    }
    if (boxes[2] != "") {
      let elem = boxes[2];
      let gadbad = false;
      for (let j = 2; j < 7; j += 2) {
        if (boxes[j] !== elem) {
          gadbad = true;
          break;
        }
      }
      if (!gadbad) {
        return true;
      }
    }
    return false;
  };

  const fillBox = (index) => {
    boxes[index] = turn;
    setboxes([...boxes]);
    if (checkWinner()) {
      setwinner(turn);
    }
    if (turn === "X") {
      setturn("O");
    } else {
      setturn("X");
    }
  };

  return (
    <div className="container">
      <div>
        <h4>Next turn - {turn}</h4>
      </div>
      <div className="row">
        <div
          className="box"
          onClick={() => {
            fillBox(0);
          }}
        >
          {boxes[0]}
        </div>
        <div
          className="box"
          onClick={() => {
            fillBox(1);
          }}
        >
          {boxes[1]}
        </div>
        <div
          className="box"
          onClick={() => {
            fillBox(2);
          }}
        >
          {boxes[2]}
        </div>
      </div>
      <div className="row">
        <div
          className="box"
          onClick={() => {
            fillBox(3);
          }}
        >
          {boxes[3]}
        </div>
        <div
          className="box"
          onClick={() => {
            fillBox(4);
          }}
        >
          {boxes[4]}
        </div>
        <div
          className="box"
          onClick={() => {
            fillBox(5);
          }}
        >
          {boxes[5]}
        </div>
      </div>
      <div className="row">
        <div
          className="box"
          onClick={() => {
            fillBox(6);
          }}
        >
          {boxes[6]}
        </div>
        <div
          className="box"
          onClick={() => {
            fillBox(7);
          }}
        >
          {boxes[7]}
        </div>
        <div
          className="box"
          onClick={() => {
            fillBox(8);
          }}
        >
          {boxes[8]}
        </div>
      </div>
      <div>{winner ? <><h4>Winner is "{winner}"</h4><button className="btn" onClick={() => {
        setboxes(boxes.map((itm) => {
          return '';
        }))
        setturn('X');
        setwinner(null)
      }}>Start Again</button></> : null}</div>
    </div>
  );
}

export default App;

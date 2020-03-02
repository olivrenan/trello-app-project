import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React, { useState } from "react";

import { addNewBoard } from "../store/actions";
import Boards from "./Boards";

const Home = ({ boards, addNewBoard }) => {
  const [boardActive, setBoardActive] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");

  const NewBoard = () => {
    return <div className="board">Create a new board...</div>;
  };

  const CreatingBoard = () => {
    return (
      <div className="board">
        <div className="board__header">
          Creating a board
          <button onClick={() => setBoardActive(false)}>X</button>
        </div>
        <div className="board__body">
          What shall we call the board?
          <input
            key="board"
            type="text"
            value={boardTitle}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onChange={e => setBoardTitle(e.target.value)}
          />
          <button onClick={() => setBoardActive(false)}>Cancel</button>
          <button
            onClick={() => {
              addNewBoard(boardTitle);
              setBoardActive(false);
              setBoardTitle("");
            }}
          >
            Create
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="home">
      <div
        className="new-board"
        onClick={() => {
          if (!boardActive) setBoardActive(true);
        }}
      >
        {boardActive ? <CreatingBoard /> : <NewBoard />}
      </div>
      {boards.map(board => (
        <Boards id={board.id} key={board.id} title={board.title} />
      ))}
    </main>
  );
};

const mapStateToProps = ({ boards }) => ({
  boards
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNewBoard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React from "react";

import { addNewList } from "../store/actions";

const ActiveBoard = props => {
  const { boards, addNewList } = props;

  const Board = ({ title, list, id }) => (
    <div>
      <h2>{title}</h2>
      {list.map((item, index) => (
        <div className="board-list" key={index}>
          <h4>{item.title}</h4>
          {item.content.map(el => el)}
        </div>
      ))}
      <button onClick={() => addNewList(id, "New List Title")}>
        Add a list...
      </button>
    </div>
  );

  return (
    <div className="active-board">
      {boards.map(board =>
        board.id.toString() === props.match.params.id ? (
          <Board
            title={board.title}
            list={board.list}
            key={board.id}
            id={board.id}
          />
        ) : null
      )}
    </div>
  );
};

const mapStateToProps = ({ boards }) => ({
  boards
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNewList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ActiveBoard);

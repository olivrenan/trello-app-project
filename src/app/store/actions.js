import * as actionTypes from "./actionTypes";

export const addNewBoard = board => (dispatch, getState) => {
  const { boards } = getState();

  const newBoard = [...boards, { id: Math.random(), title: board, list: [] }];

  dispatch({
    type: actionTypes.ADD_NEW_BOARD,
    board: newBoard
  });
};

export const addNewList = (id, listTitle) => (dispatch, getState) => {
  const { boards } = getState();

  const newBoards = [...boards];

  const newList = newBoards.filter(board => board.id === id);
  newList[0].list.push({ title: listTitle, content: [] });

  dispatch({
    type: actionTypes.ADD_NEW_LIST,
    board: newBoards
  });
};

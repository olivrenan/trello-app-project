import { ADD_NEW_BOARD, ADD_NEW_LIST } from "./actionTypes";

const initialState = {
  boards: [
    {
      id: 0,
      title: "First Board",
      list: [
        { title: "List 1", content: ["Grocery", "Take garbage"] },
        { title: "List 2", content: ["Item 1, Item 2"] }
      ]
    },
    {
      id: 1,
      title: "Second Board",
      list: [
        { title: "List 3", content: ["Grocery", "Take garbage", "Stuff"] },
        { title: "List 4", content: ["Item 1, Item 2"] }
      ]
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_BOARD:
      return { ...state, boards: action.board };
    case ADD_NEW_LIST:
      return { ...state, boards: action.board };
    default:
      return { ...state };
  }
};

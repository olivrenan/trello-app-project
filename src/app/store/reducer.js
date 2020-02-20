import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./actionTypes";

const initialState = {
  todos: [
    [
      {
        type: "paragraph",
        children: [
          { text: "This is editable " },
          { text: "rich", bold: true },
          { text: " text, " },
          { text: "much", italic: true },
          { text: " better than a " },
          { text: "<textarea>", code: true },
          { text: "!" }
        ]
      },
      {
        type: "paragraph",
        children: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ]
      },
      {
        type: "block-quote",
        children: [{ text: "A wise quote." }]
      },
      {
        type: "paragraph",
        children: [{ text: "Try it out for yourself!" }]
      }
    ],
    [
      {
        type: "paragraph",
        children: [
          { text: "This is editable " },
          { text: "rich", bold: true },
          { text: " text, " },
          { text: "much", italic: true },
          { text: " better than a " },
          { text: "<textarea>", code: true },
          { text: "!" }
        ]
      },
      {
        type: "paragraph",
        children: [
          {
            text:
              "Since it's rich text, you can do things like turn a selection of text "
          },
          { text: "bold", bold: true },
          {
            text:
              ", or add a semantically rendered block quote in the middle of the page, like this:"
          }
        ]
      },
      {
        type: "block-quote",
        children: [{ text: "A wise quote." }]
      },
      {
        type: "paragraph",
        children: [{ text: "Try it out for yourself!" }]
      }
    ],
    [
      {
        type: "paragraph",
        children: [
          { text: "This is editable " },
          { text: "rich", bold: true },
          { text: " text, " },
          { text: "much", italic: true },
          { text: " better than a " },
          { text: "<textarea>", code: true },
          { text: "!" }
        ]
      },
      {
        type: "paragraph",
        children: [
          {
            text:
              "Since it's rich text, you can do things like turn a selection of text "
          },
          { text: "bold", bold: true },
          {
            text:
              ", or add a semantically rendered block quote in the middle of the page, like this:"
          }
        ]
      },
      {
        type: "block-quote",
        children: [{ text: "A wise quote." }]
      },
      {
        type: "paragraph",
        children: [{ text: "Try it out for yourself!" }]
      }
    ],
    [
      {
        type: "paragraph",
        children: [
          { text: "This is editable " },
          { text: "rich", bold: true },
          { text: " text, " },
          { text: "much", italic: true },
          { text: " better than a " },
          { text: "<textarea>", code: true },
          { text: "!" }
        ]
      },
      {
        type: "paragraph",
        children: [
          {
            text:
              "Since it's rich text, you can do things like turn a selection of text "
          },
          { text: "bold", bold: true },
          {
            text:
              ", or add a semantically rendered block quote in the middle of the page, like this:"
          }
        ]
      },
      {
        type: "block-quote",
        children: [{ text: "A wise quote." }]
      },
      {
        type: "paragraph",
        children: [{ text: "Try it out for yourself!" }]
      }
    ]
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: action.todo };
    case EDIT_TODO:
      return { ...state, todos: action.todo };
    case DELETE_TODO:
      return { ...state, todos: action.todo };
    default:
      return { ...state };
  }
};

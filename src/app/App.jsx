import { connect } from "react-redux";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import Modal from "react-modal";
import React, { useState, useCallback, useMemo } from "react";

import EditorModal from "./components/EditorModal";
import Element from "./components/Element";
import Leaf from "./components/Leaf";

const App = ({ todos }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <div className="app">
      <header>
        <h1>Todo App</h1>
      </header>
      <div className="content">
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <EditorModal />
        </Modal>
        {todos.map((todo, index) => (
          <div className="editor" key={index}>
            <Slate editor={editor} value={todo}>
              <Editable
                readOnly
                className="editor-text"
                renderElement={renderElement}
                renderLeaf={renderLeaf}
              />
            </Slate>
          </div>
        ))}
        <button className="action-button" onClick={() => setIsOpen(true)}>
          <i className="material-icons">add</i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(mapStateToProps)(App);

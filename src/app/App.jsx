import { connect } from "react-redux";
import Modal from "react-modal";
import React, { useState } from "react";

import EditorModal from "./components/EditorModal";
import RenderTodos from "./components/RenderTodos";

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

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
        <RenderTodos />
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

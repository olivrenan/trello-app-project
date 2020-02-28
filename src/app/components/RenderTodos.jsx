import { connect } from "react-redux";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import React, { useCallback, useMemo } from "react";

import Element from "./Element";
import Leaf from "./Leaf";
import Popover from "./Popover";

const RenderTodos = ({ todos }) => {
  return (
    <div className="render-todos">
      {todos.map((todo, index) => {
        const renderElement = useCallback(props => <Element {...props} />, []);
        const renderLeaf = useCallback(props => <Leaf {...props} />, []);
        const editor = useMemo(
          () => withHistory(withReact(createEditor())),
          []
        );
        return (
          <div className="editor" key={index}>
            <Popover
              icon="more_vert"
              listChildren={["Edit", "Delete"]}
              actionsArray={[]}
            />
            <Slate editor={editor} value={todo}>
              <Editable
                readOnly
                className="editor-text"
                renderElement={renderElement}
                renderLeaf={renderLeaf}
              />
            </Slate>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(mapStateToProps)(RenderTodos);

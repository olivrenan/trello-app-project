import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import React, { useCallback, useMemo } from "react";

import Element from "./Element";
import Leaf from "./Leaf";
import Popover from "./Popover";

const RenderTodos = ({ todo }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <div className="editor">
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
};

export default RenderTodos;

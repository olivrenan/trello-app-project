import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import React, { useState, useMemo, useCallback } from "react";

import CustomEditor from "../helpers/CustomEditor";

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("content")) || [
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph" }]
      }
    ]
  );

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />;
  }, []);

  const keyDownHandler = event => {
    if (!event.ctrlKey) {
      return;
    }

    switch (event.key) {
      case "0": {
        event.preventDefault();
        CustomEditor.toggleCodeBlock(editor);
        break;
      }

      case "b": {
        event.preventDefault();
        CustomEditor.toggleBoldMark(editor);
        break;
      }
    }
  };

  const Button = ({ mouseDownHandler, classTag, content }) => {
    return (
      <button
        className={`button--${classTag}`}
        onMouseDown={e => {
          e.preventDefault();
          mouseDownHandler(editor);
        }}
      >
        {content}
      </button>
    );
  };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        setValue(value);
        const content = JSON.stringify(value);
        localStorage.setItem("content", content);
      }}
    >
      <div className="slate">
        <div className="buttons">
          <Button
            classTag="bold"
            mouseDownHandler={CustomEditor.toggleBoldMark}
            content="B"
          />
          <Button
            classTag="code"
            mouseDownHandler={CustomEditor.toggleCodeBlock}
            content="<>"
          />
          <Button
            classTag="italic"
            mouseDownHandler={CustomEditor.toggleItalicMark}
            content="I"
          />
        </div>
        <Editable
          className="text-editor"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={e => keyDownHandler(e)}
        />
      </div>
    </Slate>
  );
};

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "italic" : "normal"
      }}
    >
      {props.children}
    </span>
  );
};

export default TextEditor;

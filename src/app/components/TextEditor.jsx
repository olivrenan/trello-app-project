import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Transforms, Editor } from "slate";
import React, { useState, useMemo, useCallback } from "react";

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

  const CustomEditor = {
    isBoldMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.bold == true,
        universal: true
      });

      return !!match;
    },

    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === "code"
      });

      return !!match;
    },

    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor);
      Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: n => () => Text.isText(n), split: true }
      );
    },

    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor);
      Transforms.setNodes(
        editor,
        { type: isActive ? null : "code" },
        { match: n => Editor.isBlock(editor, n) }
      );
    }
  };

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
          <button
            onMouseDown={e => {
              e.preventDefault();
              CustomEditor.toggleBoldMark(editor);
            }}
          >
            Bold
          </button>
          <button
            onMouseDown={e => {
              e.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
            }}
          >
            Code Block
          </button>
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
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};

export default TextEditor;

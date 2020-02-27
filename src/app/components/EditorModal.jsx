import { connect } from "react-redux";
import { createEditor, Editor, Transforms } from "slate";
import { Editable, Slate, useSlate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import isHotkey from "is-hotkey";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import Button from "./Button";
import Element from "./Element";
import Icon from "./Icon";
import Leaf from "./Leaf";
import Toolbar from "./Toolbar";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const EditorModal = () => {
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Enter some text…" }]
    }
  ]);
  const [isMounted, setIsMounted] = useState();
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  return (
    <div className="editor modal">
      <Slate
        editor={editor}
        value={value}
        onChange={value => (isMounted ? setValue(value) : null)}
      >
        <Toolbar className="toolbar">
          <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <MarkButton format="underline" icon="format_underlined" />
          <MarkButton format="code" icon="code" />
          <BlockButton format="heading-one" icon="looks_one" />
          <BlockButton format="heading-two" icon="looks_two" />
          <BlockButton format="block-quote" icon="format_quote" />
          <BlockButton format="numbered-list" icon="format_list_numbered" />
          <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        </Toolbar>
        <Editable
          className="editor-text"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus
          onKeyDown={event => {
            Object.keys(HOTKEYS).forEach(hotkey => {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            });
          }}
        />
        <button className="add-button">Add Note</button>
      </Slate>
    </div>
  );
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format
  });

  return !!match;
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true
  });

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(mapStateToProps)(EditorModal);

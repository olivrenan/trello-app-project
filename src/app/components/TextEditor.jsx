import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import React, { useState, useMemo } from "react";

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph" }]
    }
  ]);

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable />
    </Slate>
  );
};

export default TextEditor;

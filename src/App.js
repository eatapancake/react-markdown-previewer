import React, { useState } from "react";
import { render } from "react-dom";
import { marked } from "marked";
import Highlight, { defaultProps } from "prism-react-renderer";
import "./App.css";
import placeholder from "./placeholder";

function App() {
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target"_blank href="${href}">${text}</a>`;
  };

  const [message, setMessage] = useState(placeholder);

  const textInputOnChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="editor-container">
          <h1>React Markdown</h1>
          <textarea
            id="editor"
            value={message}
            type="text"
            onChange={textInputOnChange}
          ></textarea>
        </div>
        <div id="preview-container">
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(message, { renderer: renderer }),
            }}
          ></div>
        </div>
      </header>
    </div>
  );
}

export default App;

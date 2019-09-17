import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-rainbow-components";
import { Input } from "react-rainbow-components";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>QuickThought.io</h1>
      </div>
      <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Input
          id="input-component-1"
          placeholder="Placeholder text"
        />
      </div>
      <div>
        <Button
          label="Randomize"
          variant="brand"
          onClick={() => alert("Hello World!")}
        />
      </div>
    </div>
  );
}

export default App;

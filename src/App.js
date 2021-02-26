// what shows up on the main page
import React from "react";
import "./App.css";
// imports the questions from quiz.js with proper instructions and displays it
//import { Questions } from "./Quiz";
import Questions from "./Quiz";

function App() {
  return (
    <div className="App">
      <Questions num="5" />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
// import the quiz question data from data.js and determines what to do with it
import { quizData } from "./data";

// header for the page
const HomePageHeader = () => {
  return (
    <header className="header">
      <h1>Introduction to FBLA Quiz</h1>
    </header>
  );
};

// for the submit button
const Submission = () => {
  return (
    <div className="button">
      Submit
    </div>
  );
};

const Footer = () => {
  return  (
    <div className="footer">
      <p> Made with ❤️ by Hannah Zhang </p>
    </div>
  )
}

// function called for true/false Questions
function TF(props) {
  return (
    <div className="question-container">
      {/* display the prompt */}
      <div key="question" className="prompt-container">
        {props.num}) {props.data.question}
      </div>
      {/* display the answer */}
      <div key="answer" class="answer-container">
        <input type="radio" name={props.num} className="radio"/> <label> {props.data.option1}</label> <br />
        <input type="radio" name={props.num} className="radio"/> <label> {props.data.option2}</label>
      </div>
    </div>
  );
}

function Multiple(props) {
  return (
    <div className="question-container">
      <div key="question" className="prompt-container">
        {props.num}) {props.data.question}
      </div>
      <div key="answer" className="answer-container">
        <input type="radio" name={props.num} className="radio"/> <label for="option">{props.data.option1}</label> <br />
        <input type="radio" name={props.num} className="radio"/> <label for="option">{props.data.option2}</label> <br />
        <input type="radio" name={props.num} className="radio"/> <label for="option">{props.data.option3}</label> <br />
        <input type="radio" name={props.num} className="radio"/> <label for="option">{props.data.option4}</label> <br />
      </div>
    </div>
  );
}

// function called whenever a question of type fillintheblank is called
function Blank(props) {
  var str = props.data.question;
  var index = str.indexOf("$BLANK");
  return (
    <div className="question-container">
      <div key="question" className="prompt-container">
        {props.num}) {str.substring(0, index)}
        <input type="text" className="blank"/>
        {str.substring(index+6)}
      </div>
    </div>
  );
}

// function called whenever a question of type dropdown is called
function Dropdown(props) {
  var str = props.data.question;
  var idx = str.indexOf("$CHOICES");
  return (
    <div className="question-container">
      <div key="question" className="prompt-container">
        {props.num}) {str.substring(0, idx)}
          <select name="Dropdown" className="dropdown">
            {props.data.options.map((val,key)=>{
              return <option key={key} value={val}> {val} </option>;
            })}
          </select> {str.substring(idx+8)}
      </div>
    </div>
  );
}

// calls functions based on question type and exports Questions to app.js to be displayed
export const Questions = () => {
  return (
    <>
      <HomePageHeader />
      <div className="page-container">
        {quizData.map((data, key) => {
          if (data.type === "truefalse") {
            return (
              <TF data={data} num={key+1} />
            );
          }
          else if (data.type === "mcq") {
            return (<Multiple data={data} num={key+1} />);
          }
          else if (data.type === "blank"){
            return (<Blank data={data} num={key+1} />);
          }
          else {
            return (<Dropdown data={data} num={key+1} />);
          }
        })}
      </div>
      <Submission />
      <Footer />
    </>
  );
};

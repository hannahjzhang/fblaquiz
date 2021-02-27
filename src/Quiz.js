// import the quiz question data from data.js and determines what to do with it
import React from "react";
import "./App.css";
import "./Results.css";
import { quizData } from "./data";
import Result from './components/ResultScreen';

// generate 5 random quiz questions based on the json data to pass into later functinos
function generateQuestions(num) {
  const Result = []
  for(let i = 0; i < num; i++) {
    const rand = Math.floor(Math.random() * quizData.length);
    if (Result.indexOf(quizData[rand]) >= 0) {
      i--;
      continue;
    }
    Result.push(quizData[rand]);
  }
  return Result;
}

// header for the page
const HomePageHeader = () => {
  return (
    <header className="header">
      <h1>FBLA Knowledge Quiz</h1>
    </header>
  );
};

// footer for the page
// div is a react shortcut for creating elements
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
        {/* when clicked, call select to store answer*/}
        <input required type="radio" name={props.num} className="radio" onClick={()=>{props.selected(props.data.option1);}} />
          <label> {props.data.option1}</label> <br />
        <input required type="radio" name={props.num} className="radio" onClick={()=>{props.selected(props.data.option2);}} />
          <label> {props.data.option2}</label>
      </div>
    </div>
  );
}

// function called for multiple choice questions
function Multiple(props) {
  return (
    <div className="question-container">
      {/* display the prompt */}
      <div key="question" className="prompt-container">
        {props.num}) {props.data.question}
      </div>
      {/* display the answer choices by iterating through the array*/}
      <div key="answer" className="answer-container">
        {props.data.options.map((val,key)=>{
          return (
            <div>
              <input required type="radio" name={props.num} className="radio" onClick={()=>{props.selected(val);}}/>
              <label for="option">{val}</label> <br />
            </div>
          );
        })}
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
          <select required name="Dropdown" className="dropdown" onChange={(e)=>{props.selected(e.target.value)}}>
            {props.data.options.map((val,key)=>{
              return <option key={key} value={val}> {val} </option>;
            })}
          </select> {str.substring(idx+8)}
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
        <input required type="text" className="blank" onChange={(e)=>{props.selected(e.target.value)}}/>
        {str.substring(index+6)}
      </div>
    </div>
  );
}

// creates a component that calls functions based on question type in order to display them
class Questions extends React.Component {
  constructor(props) {
    super(props);
    let num = props.num;
    this.state = {
      num: num,
      questionArray: generateQuestions(num),
      answerArray: Array(num).fill(" "),
      showResult : false,
      score: 0,
    }
  }
  // sets up functions to manipulate answers & check user input
  // sets the answer based on the data
  setAns(key, answer) {
    const myArr = this.state.answerArray.slice();
    myArr[key] = answer;
    this.setState({answerArray:myArr})
  }
  // computes the current score
  computeScore () {
    let rightCnt = 0;
    for (let i=0; i<this.state.answerArray.length; i++) {
      if(this.state.answerArray[i] === this.state.questionArray[i].answer) {
        rightCnt ++;
      }
    }
    this.setState({
      score: rightCnt
    })
  }
  // sends an alert to the user (to be called when check answer is clicked)
  checkAns() {
    this.computeScore();
    alert(this.state.score + " out of " + this.state.questionArray.length + " are correct");
  }
  // to be called when submit answer is clicked and shows the result if all questions have been answered
  submitAns() {
    let num = 0;
    // compute number of answers
    for (let i = 0; i < this.state.answerArray.length; i++) {
      if(this.state.answerArray[i] === " ") {
        continue;
      }
      num++;
    }
    // if not all have answered, send alert. else, show results
    if (num !== this.state.questionArray.length) {
      alert("You have not answered " + num + " out of "+ this.state.num + " required questions");
      return;
    }
    else {
      this.computeScore();
      this.setState({
        showResult: true
      })
    }
  }

  // to be showed on the result screen, which resets the questions and answers
  playAgain = () => {
    this.setState({
      questionArray: generateQuestions(this.state.num),
      answerArray: Array(this.state.num).fill(" "),
      showResult : false,
      score: 0,
    });
  }
  // to be showed on the result screen, which allows quiz takers to go back and see the same questions
  tryAgain = () => {
    this.setState({
      answerArray: Array(this.state.num).fill(" "),
      showResult : false,
      score: 0,
    });
  }

  // if the user has submitted use code from resultscreen.js to display
  // else, use logic to display the questions and corresponding buttons
  render() {
    return (
      <>
        <HomePageHeader />
        {this.state.showResult ? (
          <Result score={this.state.score} ques={this.state.questionArray} ans={this.state.answerArray}
            playAgain={this.playAgain} tryAgain={this.tryAgain}/>
        ) : (
          <div className="page-container">
          {/* from the constructor above, get the questions */}
            {this.state.questionArray.map((data, key) => {
              if (data.type === "truefalse") {
                return (<TF data={data} num={key+1} selected={answer=>this.setAns(key, answer)} />);
              }
              else if (data.type === "mcq") {
                return (<Multiple data={data} num={key+1} selected={answer=>this.setAns(key, answer)}/>);
              }
              else if (data.type === "blank"){
                return (<Blank data={data} num={key+1} selected={answer=>this.setAns(key, answer)}/>);
              }
              else {
                return (<Dropdown data={data} num={key+1} selected={answer=>this.setAns(key, answer)}/>);
              }
            })}
            <button className="button" onClick = {()=>this.checkAns()}>Check Answer</button>
            <button className="button" onClick = {()=>this.submitAns()}>Submit</button>
          </div>
        )}
        <Footer />
      </>
    );
  }
}
// export Questions to app.js to be displayed
export default Questions;

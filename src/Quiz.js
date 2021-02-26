import React from "react";
import "./App.css";
// import the quiz question data from data.js and determines what to do with it
import { quizData } from "./data";
import Result from './components/ResultScreen';

function getQuestions(num=1) {
   const res = [];
   for(let i = 0; i < num; ){
      const random = Math.floor(Math.random() * quizData.length);
      if(res.indexOf(quizData[random]) !== -1){
         continue;
      };
      res.push(quizData[random]);
      i++;
   };
   return res;
}

// header for the page
const HomePageHeader = () => {
  return (
    <header className="header">
      <h1>Introduction to FBLA Quiz</h1>
    </header>
  );
};

// for the submit button
/*
const Submission = () => {
  return (
    <div className="button">
      Submit
    </div>
  );
};
*/

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
        <input type="radio" name={props.num} className="radio"
          onClick={()=>{
            props.selected(props.data.option1);
        }} /> <label> {props.data.option1}</label> <br />
        <input type="radio" name={props.num} className="radio"
          onClick={()=>{
            props.selected(props.data.option2);
        }} /> <label> {props.data.option2}</label>
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
        {props.data.choices.map((choice, idx)=>{
           return (
	     <div>
               <input type="radio" name={props.num} className="radio"
          	      onClick={()=>{ props.selected(choice); }}
               />
               <label for="option">{choice}</label> <br />
             </div>
	   );
        })}
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
        <input type="text" className="blank" onChange={(e)=>{props.selected(e.target.value)}}
        />
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
          <select name="Dropdown" className="dropdown"
            onChange={(e)=>{props.selected(e.target.value)}}
          >
            {props.data.options.map((val,key)=>{
              return <option key={key} value={val}> {val} </option>;
            })}
          </select> {str.substring(idx+8)}
      </div>
    </div>
  );
}

// calls functions based on question type and exports Questions to app.js to be displayed
class Questions extends React.Component {
  constructor(props) {
    super(props);
    let num = props.num;
    this.state = {
      num: num,
      ques: getQuestions(num),
      ansArr: Array(num).fill(""),
      showResult : false,
      score: 0,
    }
  }
  setAns(i, ans) {
    //console.log("ans is" + ans);
    //alert("ans is" + ans);
    //alert("index is" + i);
    const myArr = this.state.ansArr.slice();
    myArr[i] = ans;
    this.setState({
      ansArr: myArr
    })
  }
  computeScore (){
    let rightCnt = 0;
    for (let i=0; i<this.state.ansArr.length; i++) {
      if(this.state.ansArr[i] === this.state.ques[i].answer) {
        rightCnt ++;
      }
    }
    this.setState({
      score: rightCnt
    })
  }

  checkAns() {
    this.computeScore();
    alert(this.state.score + " out of " + this.state.ques.length + " are correct");
  }
  submitAns() {
    this.computeScore();
    this.setState({
      showResult: true
    })
  }
  playAgain = () => {
    //let num = this.state.num;
    this.setState({
      ques: getQuestions(this.state.num),
      ansArr: Array(this.state.num).fill(""),
      showResult : false,
      score: 0,
    });
  }
  render() {
    return (
      <>
        <HomePageHeader />
        {this.state.showResult? (
          <Result score={this.state.score} ques={this.state.ques} ans={this.state.ansArr} playAgain={this.playAgain}/>):(
  <div>
        <div className="page-container">
          {this.state.ques.map((data, key) => {
            if (data.type === "truefalse") {
              return (
                <TF data={data} num={key+1}
                    selected={answer => this.setAns(key, answer)} />
              );
            }
            else if (data.type === "mcq") {
              return (
                <Multiple data={data} num={key+1} 
                    selected={answer => this.setAns(key, answer)} />);
            }
            else if (data.type === "blank"){
              return (
                <Blank data={data} num={key+1}
		    selected={answer => this.setAns(key, answer)} />);
            }
            else {
              return (
                <Dropdown data={data} num={key+1}
                    selected={answer => this.setAns(key, answer)} />);
            }
          })}
        </div>
    <div className="button">
      <button type="button" onClick={()=>this.checkAns()}>CheckAnswer</button>
      <button type="button" onClick={()=>this.submitAns()}>Submit</button>
    </div>
</div>
)
	}
        <Footer />
      </>
    );
  }
};

export default Questions;

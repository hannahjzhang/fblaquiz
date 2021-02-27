import React from 'react';
import "../Results.css";

// creates the table with the values to determine correct/incorrect
const Result = ({score, ques, ans, playAgain, tryAgain}) => {
  //alert(ans[1]);
  let answerTable = [];
  for (let i = 0; i < ques.length; i++) {
     let children = [];
     children.push(
       <td>{ques[i].question}</td>,
       <td>{ans[i] === " " ? " " : ans[i]}</td>,
       <td>{ques[i].answer}</td>,
       <td> {ques[i].answer === ans[i] ? 1 : 0}</td>
     )
     answerTable.push(<tr>{children}</tr>)
  }

// returns the table with printable results and buttons to allow for further navigation
 return (
  <div className="score-board">
    <div className="score-table-container">
      <div className="score"> Score: {score} / 5 </div>
    </div>
    <div className="score-table-container">
      <table>
        <tr><th>Question</th><th>Your Answer</th><th>Correct Answer</th><th>Score</th></tr>
        {answerTable}
      </table>
    </div>
    <button className="button" onClick={playAgain} > Play Again </button>
    <button className="button" onClick={tryAgain} > Try Again </button>
  </div>
 )
};

export default Result;

import React from 'react';
import "../App.css";

const Result = ({score,ques,ans,playAgain}) => {
  //alert(ans[1]);
  let table = [];
  for (let i = 0; i < ques.length; i++) {
     let children = [];

     children.push(<td>{ques[i].question}</td>, <td>{ques[i].answer}</td>, <td>{ans[i]}</td>, <td> {ques[i].answer === ans[i]? 1 : 0}</td>)
     table.push(<tr>{children}</tr>)
  }

 return (
  <div className="score-board">
    <div className="score"> Your score is {score} / 5 correct answer ! ! ! </div>
    <div className="scoreTable">
    <table border="1">
      <tr><th>ques</th><th>Ans</th><th>your ans</th><th>score</th></tr>
      {table}
    </table>
    </div>
    <button className="button" onClick={playAgain} > Play Again </button>
  </div>
 )
};

export default Result;


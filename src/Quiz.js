import React from "react";
import "./App.css";
// import the quiz question data from data.js and determines what to do with it
import { quizData } from "./data";

// exports Questions to app.js to be displayed
export const Questions = () => {
  return (
    <>
      <HomePageHeader />
      <div className="question-container">
        {quizData.map((data, key) => {
          return (
            <div key={key}>
              <Question
                key={key}
                question={data.question}
                options={data.options}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>FBLA Quiz</h2>
      <p>You will be given a quiz with 5 random questions regarding FBLA.
        Answer the questions to the best of your ability and then see your score!</p>
    </header>
  );
};

const Question = ({ question, options }) => {
  if (!question) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{question}</h5>
          </td>
          <td>
            <h5>{options}</h5>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
/*
export const Questions = () => {
  return (
    <>
      <div className="question-container">
        {quizData.map((data, key) => {
          if (data.type === "truefalse") {
            return (
              <div key={key}>
                {data.question} + "," + {data.options}
              </div>
            );
          } else {
            return (
              <div key={key}>
                {data.type}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
*/

// adding quiz questions in the form of json data to a file
// define an array of data that can be imported into quiz.js
export const quizData = [
  {
    type: "truefalse",
    question: "Dr. Edward Miller was the first director of FBLA-PBL.",
    options: [
      "True",
      "False"
    ],
    answer: "true"
  },
  {
    type: "mcq",
    question: "What are the official colors of FBLA?...",
    options: [
      "Blue and gold",
      "Red and white",
      "Blue and white",
      "Red and blue"
    ],
    answer: "Blue and gold"
  },
  {
    type: "dropdown",
    question: "The FBLA creed contains how many stanzas?",
    options: [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
    ],
    answer: "7"
  },
  {
    type: "blank",
    question: "The first FBLA chapter was chartered in $blank.",
    options: "blank",
    answer: "tennessee"
  },
];

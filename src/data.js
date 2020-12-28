// adding quiz questions in the form of json data to a file
// define an array of data that can be imported into quiz.js
export const quizData = [
  {
    type: "truefalse",
    question: "Dr. Edward Miller was the first director of FBLA-PBL.",
    option1: "true", option2: "false",
    answer: "true"
  },
  {
    type: "truefalse",
    question: "The three types of events are individual, duo, and team.",
    option1: "true", option2: "false",
    answer: "false"
  },
  {
    type: "mcq",
    question: "What are the official colors of FBLA?",
    option1: "blue and gold", option2: "red and white", option3: "red and blue", option4: "blue and gold",
    answer: "blue and gold"
  },
  {
    type: "mcq",
    question: "Key words found in the FBLA goals include:",
    option1: "confidence, understanding, efficient, scholarship", option2: "seek, sincere, abide, initiative",
    option3: "promise, aims, qualities, active", option4: "manner, directors, regulations, cooperations",
    answer: "confidence, understanding, efficient, scholarship"
  },
  {
    type: "dropdown",
    question: "The FBLA creed contains $CHOICES stanza(s)?",
    options: ["  ", "one", "two", "three", "four", "five", "six", "seven", "eight"],
    answer: "seven"
  },
  {
    type: "blank",
    question: "The first FBLA chapter was chartered in $BLANK.",
    answer: "tennessee"
  },
];

// adding 50 quiz questions in the form of json data to a file
// define an array of data that can be imported into quiz.js
// there are four types of questions: true/false, multiple choice, dropdown, and fill-in-the-blank
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
    type: "truefalse",
    question: "The National Awards Program (NAP) provides events based on guidelines in the Chapter Management Handbook.",
    option1: "true", option2: "false",
    answer: "false"
  },
  {
    type: "truefalse",
    question: "FBLA-PBL Community Service Day is a national celebration.",
    option1: "true", option2: "false",
    answer: "true"
  },
  {
    type: "truefalse",
    question: "The nationwide kick-off of Job Shadow Day is March 1.",
    option1: "true", option2: "false",
    answer: "false"
  },
  {
    type: "truefalse",
    question: "Proposed amendments to the bylaws shall be submitted in writing no later than March 1.",
    option1: "true", option2: "false",
    answer: "false"
  },
  {
    type: "truefalse",
    question: "Nomination forms for the Adviser Wall of Fame must be postmarked by April 1.",
    option1: "true", option2: "false",
    answer: "false"
  },
  {
    type: "truefalse",
    question: "A chapter budget should be made at the same time a chapter's program of work developed.",
    option1: "true", option2: "false",
    answer: "true"
  },
  {
    type: "truefalse",
    question: "The national website URL is www.FBLA-PBL.com.",
    option1: "true", option2: "false",
    answer: "false"
  },
  {
    type: "truefalse",
    question: "Article IV in the bylaws describes information about FBLA dues.",
    option1: "true", option2: "false",
    answer: "true"
  },
  {
    type: "truefalse",
    question: "The divisions in are FBLA, FBLA-Middle Level, Phi Beta Lambda, Professional division.",
    option1: "true", option2: "false",
    answer: "true"
  },
  {
    type: "truefalse",
    question: "There are 12 FBLA bylaws.",
    option1: "true", option2: "false",
    answer: "false"
  },
  {
    type: "truefalse",
    question: "There are five administrative regions.",
    option1: "true", option2: "false",
    answer: "true"
  },
  {
    type: "mcq",
    question: "What are the official colors of FBLA?",
    options: ["blue and gold", "red and white", "red and blue", "blue and gold"],
    answer: "blue and gold"
  },
  {
    type: "mcq",
    question: "The national association of FBLA-PBL is:",
    options: ["a limited liability company", "a partnership", "incorporated", "a proprietorship"],
    answer: "incorporated"
  },
  {
    type: "mcq",
    question: "In the last paragraph of the FBLA Creed, the following statement is made:",
    options: ["I promise to use my abilities", "I agree to do my utmost", "Every person should actively", "Every person should prepare"],
    answer: "I promise to use my abilities"
  },
  {
    type: "mcq",
    question: "Key words found in the FBLA goals include:",
    options: ["confidence, understanding, efficient, scholarship", "seek, sincere, abide, initiative",
              "promise, aims, qualities, active", "manner, directors, regulations, cooperations"],
    answer: "confidence, understanding, efficient, scholarship"
  },
  {
    type: "mcq",
    question: "In the performance event presentations:",
    options: ["the leader of the group presents all information", "all team members actively participate",
            "one member is designated to answer the judges questions", "each team member has five minutes to speak"],
    answer: "all team members actively participate"
  },
  {
    type: "mcq",
    question: "Which one of the following is not one of the administrative regions in the United States?",
    options: ["Eastern", "Mountain-Plains", "Western-Central", "Southern"],
    answer: "Western-Central"
  },
  {
    type: "mcq",
    question: "The third FBLA-PBL Goal is to create more:",
    options: ["interest in and understanding of the free enterprise system", "interest in and understanding of American business enterprise",
            "understanding of American business enterprise", "interest in American business enterprise"],
    answer: "interest in and understanding of American business enterprise"
  },
  {
    type: "mcq",
    question: "FBLA's Go Green project recognizes one chapter in each region for its:",
    options: ["winning essays", "recycling projects", "collection of the most tabs from cans for Ronald McDonald House", "earth friendly activities"],
    answer: "earth friendly activities"
  },
  {
    type: "mcq",
    question: "In the Job Interview event you must provide a:",
    options: ["letter of application, resume, job application, interview", "letter of application, resume, job application, taped interview",
          "resume, job application, interview", "resume, job application, taped interview"],
    answer: "letter of application, resume, job application, interview"
  },
  {
    type: "mcq",
    question: "Which of the following is accepted under the FBLA dress code?",
    options: ["flannel", "denim", "hats", "two piece pant-suit"],
    answer: "two piece pant-suit"
  },
  {
    type: "mcq",
    question: "The increasing use of the internet has led to the addition of this competitive event:",
    options: ["Cyber Security", "Intrusion Security", "Cryptography", "Forensics Security"],
    answer: "Cyber Security"
  },
  {
    type: "dropdown",
    question: "The FBLA creed contains $CHOICES stanza(s)?",
    options: ["  ", "one", "two", "three", "four", "five", "six", "seven", "eight"],
    answer: "seven"
  },
  {
    type: "dropdown",
    question: "$CHOICES copies of the State Chapter Annual Business Report must be submitted for national competition.",
    options: ["  ", "one", "two", "three", "four", "five", "six", "seven", "eight"],
    answer: "two"
  },
  {
    type: "dropdown",
    question: "Handbooks for officers can be purchased from $CHOICES.",
    options: ["  ", "MarketPlace", "Barnes and Noble", "NAP Committee", "board of directors", "parents"],
    answer: "MarketPlace"
  },
  {
    type: "dropdown",
    question: "The Chapter Management Handbook updates are revised and distributed $CHOICES.",
    options: ["  ", "as needed", "once a year", "twice a year", "every two years", "every five years"],
    answer: "once a year"
  },
  {
    type: "dropdown",
    question: "Following the National Awards Program Committee’s evaluation of a new competitive event, notification of adoption by $CHOICES.",
    options: ["  ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    answer: "December"
  },
  {
    type: "dropdown",
    question: "This word is not in the FBLA emblem: $CHOICES.",
    options: ["  ", "education", "leadership", "service", "progress"],
    answer: "leadership"
  },
  {
    type: "dropdown",
    question: "All participants who enter competitive events must have their national dues paid by $CHOICES of the current school year.",
    options: ["  ", "January 1", "February 1", "March 1", "April 1", "May 1"],
    answer: "February 1"
  },
  {
    type: "dropdown",
    question: "The M&M game is a motivational activity with peanut butter and jelly highlighting $CHOICES.",
    options: ["  ", "cooperative skills", "speaking skills", "listening skills", "team skills", "drawing skills"],
    answer: "listening skills"
  },
  {
    type: "dropdown",
    question: "The Edward D. Miller Award is the for the $CHOICES.",
    options: ["  ", "American Enterprise Project", "Business Plan", "Community Service Project", "Business Ethics"],
    answer: "listening skills"
  },
  {
    type: "dropdown",
    question: "NLC was held in $CHOICES in 2014.",
    options: ["  ", "St. Louis, MO", "Nashville, TN", "Chicago, IL", "Kansas City, MO", "Sacramento, CA", "Boston, MA"],
    answer: "Nashville, TN"
  },
  {
    type: "dropdown",
    question: "$CHOICES must be  worn for all conference functions.",
    options: ["  ", "Name badges", "Watches", "Name plates", "FBLA pins", "Pens"],
    answer: "Nashville, TN"
  },
  {
    type: "dropdown",
    question: "Any changes made for event participation must be by the first $CHOICES.",
    options: ["  ", "Friday in June", "Monday in June", "Friday in May", "Monday in July"],
    answer: "Friday in June"
  },
  {
    type: "dropdown",
    question: "According to the FBLA goals, money management should be $CHOICES.",
    options: ["  ", "established", "understood", "practiced efficiently", "budgeted", "easy"],
    answer: "practiced efficiently"
  },
  {
    type: "blank",
    question: "A parliamentary procedure team can have $BLANK repeat members from a previous National Leadership Conference team",
    options: ["  ", "one", "two", "three", "none"],
    answer: "two"
  },
  {
    type: "blank",
    question: "The first FBLA chapter was chartered in $BLANK.",
    answer: "tennessee"
  },
  {
    type: "blank",
    question: "FBLA-PBL Day is the second day in this month: $BLANK.",
    answer: "February"
  },
  {
    type: "blank",
    question: "The National Fall Leadership Conferences are held in this month: $BLANK.",
    answer: "November"
  },
  {
    type: "blank",
    question: "$BLANK many copies of the State Chapter Annual Business Report must be submitted for national competition.",
    answer: "two"
  },
  {
    type: "blank",
    question: "The FBLA-PBL Code of Ethics consists of $BLANK I will statements.",
    answer: "eight"
  },
  {
    type: "blank",
    question: "There are $BLANK sections to Article III of the bylaws.",
    answer: "two"
  },
  {
    type: "blank",
    question: "The last word of the FBLA-PBL pledge is $BLANK.",
    answer: "leader"
  },
  {
    type: "blank",
    question: "FBLA has $BLANK goals.",
    answer: "nine"
  },
  {
    type: "blank",
    question: "In the officer installation ceremony there is one white candle and $BLANK colored candles.",
    answer: "seven"
  },
  {
    type: "blank",
    question: "The national office will be president, $BLANK vice presidents, secretary and treasurer.",
    answer: "five"
  },
  {
    type: "blank",
    question: "A local chapter with 76 members shall be entitled to $BLANK voting delegates at the National Leadership Conference.",
    answer: "three"
  },
  {
    type: "blank",
    question: "State chapters wishing to be issued a charter, must have at least $BLANK local chapter(s).",
    answer: "five"
  },
];

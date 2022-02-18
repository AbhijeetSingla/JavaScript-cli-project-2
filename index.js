var readlineSync = require("readline-sync");

var questionBankZero = [
  { q: "What's the name of wife of Tony Stark (Iron Man)?", a: "pepper potts", marks: 1},  
  { q: "Who made the first shield for Captain America?", a: "howard stark", marks: 1},
  { q: "Who's the father of Thor?", a: "odin", marks: 3},
];

var questionBankOne = [
  { q: "What's the most common slicer for 3D printers?", a: "cura", marks: 1},  
  { q: "What's the most common type of 3D printer?", a: "fdm", marks: 1},
  { q: "Name the top 3 filaments available for 3D printers. (type the ans separated by commas and in alphabetical order)", a: "abs, petg, pla", marks: 3},
];

var questionBankTwo = [
  { q: "What's the program of a CNC machine called?", a: "gcode", marks: 1},  
  { q: "What's the most common firmware for 3D printers?", a: "marlin", marks: 1},
  { q: "Name the top 3 firmwares available for 3D printers. (type the ans separated by commas and in alphabetical order)", a: "klipper, marlin, reprap", marks: 3},
];

var level = 0;
var score = 0;
var space = " ";

function showAnger () {
  level++;
  if (level === 1){
  console.log("-------------------------------");
  console.log("Oh! so you think you're smart");
  console.log("Answer these questions -^-");
  console.log("-------------------------------");
  } else {
    console.log("-------------------------------");
    console.log("Ohhhhoohhoooo! you are so DEAD!!!");
    console.log("-------------------------------");
  }
}

function askQuestions (quesbank){
  for (fa = 0; fa < quesbank.length; fa++){
    var userAns = readlineSync.question(quesbank[fa].q + space);
    if (userAns.toLowerCase() === quesbank[fa].a){
      console.log("You are right!");
      score = score + quesbank[fa].marks;
    } else {
      console.log("You are wrong!");
      score--;
    }
  }
}

console.log("Welcome to the quiz about how much you know about Marvel comics!");
var userName = readlineSync.question("What's your name?" + space);
var welcomeMessage = "Welcome" + space + userName;
console.log(welcomeMessage);
askQuestions(questionBankZero);
if (score >= 4) {
  showAnger();
  askQuestions(questionBankOne);
  if (score >= 9) {
    showAnger();
    askQuestions(questionBankTwo);
  }
}

if (score >= 10){
  console.log("Well DAYUMMMM!!");
  console.log("Your score is:" + space + score);
} else {
  console.log("Your score is:" + space + score);
}
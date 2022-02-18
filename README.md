# Quiz

Play the quiz - [here](https://replit.com/@AbhijeetSingla/Lecture-1-markTwo?embed=1&output=1#index.js)

# About

This quiz's questions are about Marvel comics, but only the first three questions 😈

If you answer the first three questions correctly, you will be surprised with the super difficult questions.

This quiz was made as a part of [neogcamp lesson-1](https://neog.camp/guide/lesson-one) using a service called [repl.it](https://repl.it), which allows users to run CLI apps without much configuration required since it handles that automatically and has a smart IDE.

My repl.it profile - [repl.it/abhijeetsingla](https://repl.it/abhijeetsingla).

This code demonstrates the use of the following things: 
- Arrays
- Objects
- variables
- functions
- branching with conditions
- loops
- [readline-sync package](https://www.npmjs.com/package/readline-sync)

# Code
The code includes 3 different arrays of objects which defines a questions with keys naming - question, answer and marks, these arrays are called **question banks**.

A function is defined (askQuestions) which loops and presents the users with questions present in the question bank, which was passed to it as a parameter. Also there is a "showAnger()" function so as to make the quiz more interactive, as it prints a pre defined message according the times it was called, thus specified the difficulty the user is on.

The 3 question banks increase in difficulty one after the another, so the user is only presented another question bank if they cross a specified score. 
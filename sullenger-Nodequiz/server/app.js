/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const Employee = require("./db-models/employee");
const QuizBank = require("./db-models/quiz-bank");
const QuizResult = require("./db-models/quiz-result");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../dist/nodequiz")));
app.use("/", express.static(path.join(__dirname, "../dist/nodequiz")));

// Global variables
const serverPort = 3000;

// MongoDB connection string
const connString =
  "mongodb+srv://user_208:bznXR3on@ems-nhomg.mongodb.net/WEB-450?retryWrites=true";

/************************* Mongoose connection strings go below this line  ***************/
mongoose
  .connect(connString, {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true
  })
  .then(() =>
    console.debug("Connection to the Database instance was successful")
  )
  .catch(err => console.debug("MongoDB Error: " + err.message));

/************************* API routes go below this line ********************/

// posts new employee
app.post("/api/employees", function(req, res, next) {
  const employee = {
    employeeId: req.body.employeeId,
    userName: req.body.userName
  };

  Employee.create(employee, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  });
});

// Get employee by id
app.get("/api/employees/:id", function(req, res, next) {
  Employee.findOne({ employeeId: req.params.id }, function(err, employee) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employee);
      res.json(employee);
    }
  });
});

// Get all employees
app.get("/api/employees", function(req, res, next) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  });
});

// Post quizzes
app.post("/api/quiz_Bank", function(req, res, next) {
  const quiz = {
    quiz_Bank_Id: req.body.quiz_Bank_Id,
    quiz_Name: req.body.quiz_Name,
    quiz_Questions: {
      question: req.body.quiz_Questions.question,
      quiz_Answers: {
        answer_1: req.body.quiz_Questions.quiz_Answers.answer_1,
        answer_2: req.body.quiz_Questions.quiz_Answers.answer_2,
        answer_3: req.body.quiz_Questions.quiz_Answers.answer_3,
        answer_4: req.body.quiz_Questions.quiz_Answers.answer_4,
        correct_Answer: req.body.quiz_Questions.quiz_Answers.correct_Answer
      }
    }
  };

  QuizBank.create(quiz, function(err, quiz_Bank) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quiz_Bank);
      res.json(quiz_Bank);
    }
  });
});

// Get quiz by id
app.get("/api/quiz_Bank/:id", function(req, res, next) {
  QuizBank.findOne({ quiz_Bank_Id: req.params.id }, function(err, quiz_Bank) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quiz_Bank);
      res.json(quiz_Bank);
    }
  });
});

// Get all quizzes
app.get("/api/quiz_Bank", function(req, res, next) {
  QuizBank.find({}, function(err, quiz_Bank) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quiz_Bank);
      res.json(quiz_Bank);
    }
  });
});

// posts new quizResult
app.post("/api/quiz/:id/quiz-results", function(req, res, next) {
  const quizResult = {
    employeeId: req.body.employeeId,
    quizId: req.body.quizId,
    score: req.body.score,
    date: req.body.date,
    result: req.body.result
  };

  QuizResult.create(quizResult, function(err, quiz) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quizResult);
      res.json(quizResult);
    }
  });
});

// Get all quizResults
app.get("/api/quiz-results", function(req, res, next) {
  QuizResult.find({}, function(err, quizresult) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quizresult);
      res.json(quizresult);
    }
  });
});

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});

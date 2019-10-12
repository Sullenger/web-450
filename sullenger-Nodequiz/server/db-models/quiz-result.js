/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let quizResultSchema = new Schema({
  employeeId: { type: String },
  quizId: { type: String },
  result: { type: String }
});

module.exports = mongoose.model("QuizResult", quizResultSchema);


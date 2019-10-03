const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let quizSchema = new Schema({
  quiz_Bank_Id: { type: Schema.Types.ObjectId, ref: "quizBank" },
  quiz_Name: { type: Schema.Types.ObjectId, ref: "quizBank" },
  question: String,
  quiz_Answers: {
    answer_1: String,
    answer_2: String,
    answer_3: String,
    answer_4: String,
    correct_Answer: String
  }
});

let quizBankSchema = new Schema({
  quiz_Bank_Id: Number,
  quiz_Name: String,
  quiz_Questions: [quizSchema]
});

module.exports = mongoose.model("QuizBank", quizBankSchema);

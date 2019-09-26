const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeResultsSchema = new Schema({
  employeeId: {type: Schema.Types.ObjectId, ref: "Employee"},
  quiz_Name: {type: Schema.Types.ObjectId, ref: "EmployeeHistory"},
  date: {type: String},
  score: {type: Number}
})

module.exports = mongoose.model('EmployeeResults', employeeResultsSchema);

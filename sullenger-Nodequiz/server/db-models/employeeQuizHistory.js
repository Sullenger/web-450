const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeHistorySchema = new Schema({
  employeeId: {type: Schema.Types.ObjectId, ref: "Employee"},
  quiz_Name: {type: String},
  employeeQuizResults: [{type: Schema.Types.ObjectId, ref: "EmployeeResults"}]
})

module.exports = mongoose.model('EmployeeHistory', employeeHistorySchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  employeeId: {type: String, required: true},
  userName: {type: String},
  employeeQuizHistory: [{type: Schema.Types.ObjectId, ref: "EmployeeHistory"}]
})

module.exports = mongoose.model('Employee', employeeSchema);

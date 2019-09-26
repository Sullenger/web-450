const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee = require('./db-models/employee')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': "false"}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// Global variables
const serverPort = 3000;

// MongoDB connection string
const connString = "mongodb+srv://user_208:bznXR3on@ems-nhomg.mongodb.net/WEB-450?retryWrites=true";

/************************* Mongoose connection strings go below this line  ***************/
mongoose.connect(connString, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
  .then(() => console.debug("Connection to the Database instance was succesful"))
  .catch((err) => console.debug("MongoDB Error: " + err.message))

/************************* API routes go below this line ********************/

app.post('/api/employees', function(req, res, next) {
  const employee = {
    employeeId: req.body.employeeId,
    userName: req.body.userName
  };

  Employee.create(employee, function(err, employees){
    if (err) {
      console.log(err)
      return next(err)
    } else {
      console.log(employees)
      res.json(employees)
    }
  })
})

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});

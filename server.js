var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readColleges();
});

function readColleges() {
  connection.query("SELECT name FROM colleges", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

// prompt user 
inquirer.prompt([
  {
    type: "checkbox",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "Add Employee",
      "Add Role",
      "Add Department",
      "View All Employees",
      "View All Roles",
      "View All Departments",
      "Update Employee Role",
    ]  
  },
  {
    type: "input",
    name: "firstname",
    message: "What is the employee's first name?"
  },
  {
    type: "input",
    name: "lastname",
    message: "What is the employee's last name?"
  }
]).then(function(data) {

  fs.writeFile("README-output.md", output, function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});

var orm = require("./config/orm.js");
var inquirer = require("inquirer");
var connection = require("./config/connection.js");


// prompt user 
inquirer.prompt(
  {
    type: "checkbox",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Roles",
      "View All Departments",
      "Add Employee",
      "Add Role",
      "Add Department",
      "Update Employee Role"
    ]  
  }).then(function(answer) {
    switch (answer.action[0]) {
      case "View All Employees":
        orm.selectAllEmployees();
        break;
  
      case "View All Roles":
        orm.selectAll("title","role");
        break;
  
      case "View All Departments":
        orm.selectAll("name","department");
        break;
  
      case "Add Employee":
        addEmployee();
        break;
  
      case "Add Department":
        addDept();
        break;
      case "Update Employee Role":
        addRole();
        break;
      }
});


//   {
//     type: "input",
//     name: "firstname",
//     message: "What is the employee's first name?",
//     when: answers.action ===  "Add Employee"
//   },
//   {
//     type: "input",
//     name: "lastname",
//     message: "What is the employee's last name?",
//     filter: answers => answers.action
//   }
// ]).then(function(data) {
//     console.log("Success!");

//   });

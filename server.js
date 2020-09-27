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
      case "Add Role":
        addRole();
        break;
      case "Update Employee Role":
        updateRole();
        break;
      }
});


function addEmployee() {

  var manager = 'SELECT id, first_name, last_name FROM employee';
  var role = 'SELECT id, title FROM role';

  connection.query(manager, function (err, res) {
    if (err) throw err;
    const managers = res.map(({id, first_name, last_name}) => ({name: `${first_name} ${last_name}`, value: id}));

    connection.query(role, function (err, res) {
      if (err) throw err;
      const roles = res.map(({id, title}) => ({name: title,value: id}));

      inquirer.prompt(
        [
          {
            name: "firstname",
            type: "input",
            message: "What is the employee's first name?"
          },
          {
            name: "lastname",
            type: "input",
            message: "What is the employee's last name?"
          },
          {
            name: "manager",
            type: "list",
            message: "Who is the employee's manager?",
            choices: managers
          },
          {
            name: "employeeRole",
            type: "list",
            message: "What is the employee's role?",
            choices: roles
          }
        ]).then(answers => { connection.query("INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)"
                                              ,[answers.firstname, answers.lastname, answers.employeeManager, answers.employeeRole]
                                              ,function (err, res) {
                                                 if (err) throw err;
                                               });
                                               connection.end();
            });
    });
  });
  
};


function addRole() {
  var dept = 'SELECT * FROM department';

  connection.query(dept, function (err, res) {
    if (err) throw err;
    const departments = res.map(({id, name}) => ({name: name,value: id}));
    inquirer.prompt(
        [
          {
            name: "item",
            type: "input",
            message: "What role would you like to add?"
          },
          {
            name: "salary",
            type: "input",
            message: "How much is the salary?"
          },
          {
            name: "department",
            type: "list",
            message: "Which department?",
            choices: departments
          }
        ]).then(answers => { connection.query("INSERT INTO role (title,salary,department_id) VALUES (?,?,?)"
                                              ,[answers.item,answers.salary,answers.department]
                                              ,function (err, res) {
                                                 if (err) throw err;
                                               });
                                               connection.end();
            });  
  });
};

function addDept() {

  inquirer.prompt(
        [
          {
            name: "name",
            type: "input",
            message: "What is the department that you would like to add?"
          }
        ]).then(answers => { connection.query(`INSERT INTO department (name) VALUES (?)`
                                              ,[answers.name]
                                              ,function (err, res) {
                                                 if (err) throw err;
                                                 connection.end();
                                               });
                                               
            });
};


function updateRole(){

  var employee = 'SELECT id, first_name, last_name FROM employee';
  var role = 'SELECT id, title FROM role';

  connection.query(employee, function (err, res) {
    if (err) throw err;
    const employees = res.map(({id, first_name, last_name}) => ({name: `${first_name} ${last_name}`, value: id}));

    connection.query(role, function (err, res) {
      if (err) throw err;
      const roles = res.map(({id, title}) => ({name: title,value: id}));

      inquirer.prompt(
        [
           {
            name: "employeeName",
            type: "list",
            message: "Who is the employee's manager?",
            choices: employees
          },
          {
            name: "employeeRole",
            type: "list",
            message: "What is the new role?",
            choices: roles
          }
        ]).then(answers => { connection.query("UPDATE employee SET role_id = (?) WHERE id = (?)",
                                             [answers.employeeRole, answers.employeeName]
                                              ,function (err, res) {
                                                 if (err) throw err;
                                               });
                                               connection.end();
            });
            
    });
  });

}
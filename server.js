var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAndOrder("animal_name", "pets", "price");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");



var inquirer = require("inquirer");


// prompt user 
inquirer.prompt([
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

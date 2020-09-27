var connection = require("./connection.js");

var orm = {
  selectAllEmployees: function() {
    var queryString =  "SELECT employee.first_name, employee.last_name, role.title , role.salary, department.name FROM employee ";
    queryString += "INNER JOIN role on employee.role_id=role.id INNER JOIN department on role.department_id=department.id";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.table(result);
      connection.end();
    });
    
  },
  selectAll: function(column, table) {
    var queryString = "SELECT ?? FROM ?? ";
    connection.query(queryString, [column,table], function(err, result) {
      if (err) throw err;
      console.table(result);
    });
  }
};

module.exports = orm;

var connection = require("./connection.js");

var orm = {
  selectAllEmployees: function() {
    var queryString = "SELECT employee.first_name, employee.last_name, role.title , role.salary, department.name FROM employee INNER JOIN role on employee.role_id=role.id INNER JOIN department on role.department_id=department.id";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
    console.table(result);
      
    });
  },
  selectAll: function(column, table) {
    var queryString = "SELECT ?? FROM ?? ";
    connection.query(queryString, [column,table], function(err, result) {
      if (err) throw err;
      console.table(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;

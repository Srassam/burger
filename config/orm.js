var connection = require("../config/connection.js");

// need to update, still working

delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
        if (err) {
            throw err;
        }

        cb(result);
    }):

}




module.exports = orm;
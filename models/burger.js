var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        })
    },
    updateOne: function (cols, vals, cb) {
        orm.updateOne("burgers", cols, vals, function (res) {
            cb(res);
        })
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
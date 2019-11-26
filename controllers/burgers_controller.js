var express = require("express");

var router = express.Router();

//import data model 
var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne(['burger_name'], [req.body.burger_name], function (data) {
        // Send back the ID of the new quote
        res.status(200).end();
    })
});

router.put("/burger:id", function (req, res) {
    var condition = 'id=' + req.params.id.substring(1);
    burger.updateOne({ devoured: true }, condition, function (data) {
        if (res.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})
// Export routes for server.js to use.
module.exports = router;
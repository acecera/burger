var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    console.log("burger");
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        return res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.create([
        "name", "devour"
    ], [
        req.body.name, req.body.devour
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devour: req.body.devour
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(202).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
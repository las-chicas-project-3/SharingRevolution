const express = require("express");
const router = express.Router();
const Object = require("../../models/object");

router.get("/info", (req, res) => {
    Object.find({})
        .then(function (dbObject) {
            res.json(dbObject);
        })
        .catch(function (err) {
            res.json(err);
        })
});


router.get("/info/:id", (req, res) => {
    Object.find({ _id: req.params.id })
        .then(function (dbObject) {
            console.log(dbObject)
            res.json(dbObject);
        })
        .catch(function (err) {
            res.json(err);
        })
});


module.exports = router
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../Auth/signup");
const validateLoginInput = require("../../Auth/login");

// Load User model
const User = require("../../models/user");
let payload = "";

router.get("/info", (req, res) => {
    User.find({})
        .then(function (dbUser) {
            res.json(dbUser);
        })
        .catch(function (err) {
            res.json(err);
        })
});


//Getting information from a particular user
router.get("/info/:id", (req, res) => {
    User.find({ _id: payload.id })
        .then(function (dbUser) {
            console.log(dbUser)
            res.json(dbUser);
        })
        .catch(function (err) {
            res.json(err);
        })
});

router.put("/update", (req, res) => {
    
    const userCurrentPoints = req.body.userId.userId.points
    const objectCurrentPoints = req.body.userId.obj.points
    const result = userCurrentPoints - objectCurrentPoints

    console.log("Result ")
    console.log(result)

    User.update({ _id: req.body.userId.userId._id }, { $set: { points: result } })
        .then(function (dbUser) {
            console.log(dbUser)
            res.json(dbUser);

        })
        .catch(function (err) {
            res.json(err);
        })

});


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    console.log(req.body)
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        console.log(req.body)
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            console.log(user);
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    console.log("HANDLING LOGIN ")
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                payload = {
                    id: user.id,
                    name: user.name
                };
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});


module.exports = router;

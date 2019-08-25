const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


// Load User model
const User = require("../../models/user");

router.get("/info", (req, res) => {
    User.find({
        _id: req.user._id
    })
        .then(function (dbUser) {
            res.json(dbUser);
        })
        .catch(function (err) {
            res.json(err);
        })
});


//Getting information from a particular user
router.get("/info/:id", (req, res) => {
    User.find({ _id: req.params.id })
        .then(function (dbUser) {
            console.log(dbUser)
            res.json(dbUser);
        })
        .catch(function (err) {
            res.json(err);
        })
});

router.put("/update", (req, res) => {

    const user = req.body.user
    const obj = req.body.obj

    const userCurrentPoints = user.points
    const objectCurrentPoints = obj.points
    const result = userCurrentPoints - objectCurrentPoints

    console.log("Request ")
    console.log(req.body)
     

    User.update({ _id: user.id }, { $set: { points: result } })
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
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
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
                        .catch(err => {
                            console.log(err)
                            throw err
                        });
                });
            });
        }
    });
});

//TAYLOR VALUES
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
// router.post("/login", (req, res) => {
//     passport.authenticate(
//         'local',
//         { session: false },
//         (error, user) => {

//           if (error || !user) {
//             res.status(400).json({ error });
//           }

//           /** This is what ends up in our JWT */
//           const payload = {
//             username: user.email,
//             _id: user._id,
//             expires: Date.now() + parseInt(process.env.JWT_EXPIRATION_MS),
//           };

//           /** assigns payload to req.user */
//           req.login(payload, {session: false}, (error) => {
//             if (error) {
//               res.status(400).send({ error });
//             }

//             /** generate a signed json web token and return it in the response */
//             const token = jwt.sign(JSON.stringify(payload), keys.secretOrKey);

//             /** assign our jwt to the cookie */
//             res.cookie('jwt', token, { httpOnly: true, secure: true });
//             res.status(200).send({ email: user.email });
//           });
//         },
//       )(req, res);
// });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
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
                const payload = {
                    id: user.id,
                    name: user.name,
                    points: user.points
                };
                console.log("USER")
                console.log(user)
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

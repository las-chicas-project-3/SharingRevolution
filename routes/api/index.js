const express = require("express")
const router = express.Router();

const userRoutes = require("./user");
const objectRoutes = require("./object");

router.use("/user", userRoutes);
router.use("/object", objectRoutes);

module.exports = router;

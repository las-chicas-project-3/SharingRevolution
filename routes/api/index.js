const router = require("express").Router();
const bookRoutes = require("./client");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;

const router = require("express").Router();
const clientRoutes = require("./client");

// client routes
router.use("/client", clientRoutes);

module.exports = router;

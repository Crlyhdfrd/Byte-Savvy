const router = require("express").Router();
const homeRoutes = require("./home");
const userRoutes = require("./userRoutes");
const dashboard = require("./dashboardRoutes");
const login = require("./login");

router.use("/dashboardRoutes", dashboard);

router.use("/login", login);

router.use("/userRoutes", userRoutes);

router.use("/", homeRoutes);

module.exports = router;
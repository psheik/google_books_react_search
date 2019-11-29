let path = require("path");
let router = require("express").Router();
let bookRoutes = require("./books");
let googleRoutes = require("./google");
router.use("/books", bookRoutes);
router.use("/google", googleRoutes);
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
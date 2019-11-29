let path = require("path");
let router = require("express").Router();
let apiRoutes = require("./api");
router.use("/api", apiRoutes);
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
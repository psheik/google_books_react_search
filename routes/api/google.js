let router = require("express").Router();
let googleController = require("../../controllers/googleController");

router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
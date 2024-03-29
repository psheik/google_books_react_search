let router = require("express").Router();
let bookController = require("../../controllers/bookController");
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/get", itemController.findAllItems);
router.post("/post", itemController.createNewItem)
router.get("/getOne", itemController.findOneSingleItem)
router.patch("update", itemController.updateExistingItem)
router.delete("/delete", itemController.deleteItemWithId)

module.exports = router;

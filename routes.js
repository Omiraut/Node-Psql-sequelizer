const { Router } = require("express");
const controller = require("./controller/usercontroller");
const router = Router();

router.get("/", controller.getAllUser);
router.post("/", controller.saveUser);
router.get("/:id", controller.getUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);
module.exports = router;

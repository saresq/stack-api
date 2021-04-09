const { Router } = require("express");
const {
  getStack,
  pushNumber,
  popNumber,
  getMaxNumber,
} = require("../controllers/stack.controller");

const router = Router();

router.route("/").get(getStack);
router.route("/push/:number").get(pushNumber);
router.route("/pop").get(popNumber);
router.route("/getmax").get(getMaxNumber);

module.exports = router;

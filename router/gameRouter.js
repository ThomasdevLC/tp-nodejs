const controller = require("../controller/gameController");
const { validateChoiceParam } = require("../validator/gameValidator");
const validate = require("../validator/validate");

const express = require("express");
const router = express.Router();

router.get("/play/:choice", validateChoiceParam, validate, controller.play);
router.get("/score", controller.getScore);
router.post("/reset", controller.resetScore);
router.put("/score/:wins/:loses/:ties", controller.updateScore);

module.exports = router;

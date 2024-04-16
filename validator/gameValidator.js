const { param } = require("express-validator");

const validateChoiceParam = [param("choice").notEmpty().isString()];

const validateScoreParams = [param("wins").notEmpty().isNumeric(), param("loses").notEmpty().isNumeric(), param("ties").notEmpty().isNumeric()];

module.exports = { validateChoiceParam, validateScoreParams };

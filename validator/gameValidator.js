const { param } = require("express-validator");

const validateChoiceParam = [param("choice").notEmpty().isString()];

module.exports = { validateChoiceParam };

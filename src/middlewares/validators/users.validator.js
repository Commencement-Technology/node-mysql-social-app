const { body, param } = require("express-validator");

const getUserValidator = [
  param("userId")
    .notEmpty()
    .withMessage("User ID is required")
    .isInt()
    .withMessage("User ID must be an integer"),
];

const updateUserValidator = [
  body("username")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("email").optional().isEmail().withMessage("Email must be valid"),
  body("profile_pic")
    .optional()
    .isURL()
    .withMessage("Profile picture must be a valid URL"),
  body("cover_pic")
    .optional()
    .isURL()
    .withMessage("Cover picture must be a valid URL"),
];

module.exports = {
  getUserValidator,
  updateUserValidator,
};

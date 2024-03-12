const Joi = require('joi');

const usernameComplexityOptions = {
  min: 4,
  max: 20,
  alphaNumeric: true,
  // Add more complexity rules as needed
};

module.exports.usernamePass = (usernameToCheck) => {
  const schema = Joi.string().min(usernameComplexityOptions.min).max(usernameComplexityOptions.max);

  // Add more rules as needed
  if (usernameComplexityOptions.alphaNumeric) {
    schema.pattern(/^[a-zA-Z0-9]+$/);
  }

  return schema.validate(usernameToCheck);
};

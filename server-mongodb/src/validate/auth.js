const Joi = require("joi");

exports.register = (data) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  });

  return schema.validate(data);
};

exports.login = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

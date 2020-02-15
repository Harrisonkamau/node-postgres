const { Joi } = require('koa-joi-router');
const { errors: { JoiValidationError } } = require('../../utils');

const schema = {
  email: Joi.string().email().required().error(
    new JoiValidationError('Email is a required field'),
  ),
  firstName: Joi.string().required().error(
    new JoiValidationError('First Name is a required field'),
  ),
  lastName: Joi.string().required().error(
    new JoiValidationError('Last Name is a required field'),
  ),
};

module.exports = {
  method: 'post',
  path: '/',
  validate: {
    type: 'json',
    body: schema,
  },
  handler: async (ctx) => {
    const { models: { User } } = ctx;
    const { email, firstName, lastName } = ctx.request.body;
    const user = await User.findOne({ where: { email } });
    ctx.assert(!user, 400, `User with email: ${email} already exists.`);

    const newUser = await User.create({
      email,
      firstName,
      lastName,
    });

    ctx.body = newUser;
    ctx.status = 201;
  },
};

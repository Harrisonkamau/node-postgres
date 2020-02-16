const { Joi } = require('koa-joi-router');
const { errors: { JoiValidationError } } = require('../../utils');

module.exports = {
  method: 'get',
  path: '/:id',
  validate: {
    id: Joi.number().error(new JoiValidationError('Please provide a valid user ID')),
  },
  handler: async (ctx) => {
    const { models: { User } } = ctx;
    const { id } = ctx.request.params;

    const user = await User.findOne({ where: { id } });
    ctx.assert(user, 404, `User with id: ${id} is not found`);

    ctx.body = user;
    ctx.status = 200;
  },
};

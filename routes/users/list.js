module.exports = {
  method: 'get',
  path: '/',
  handler: async (ctx) => {
    const { models: { User } } = ctx;
    const users = await User.findAll();
    ctx.assert(users.length, 400, 'No users found at this time');
    ctx.body = {
      message: `Successfully retrieved all ${users.length} users`,
      data: users,
    };

    ctx.status = 200;
  },
};

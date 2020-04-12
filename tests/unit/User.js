const { expect, models: { User } } = require('../setup');
const { users } = require('../seedData');

describe('User', () => {
  describe('schema validations', () => {
    it('cannot save without first name', () => {
      const [user] = users;
      const newUser = new User({
        ...user,
        firstName: '',
      });

      expect(newUser.save).to.throw();
    });

    it('cannot save without last name', () => {
      const [, user] = users;
      const newUser = new User({
        ...user,
        lastName: '',
      });

      expect(newUser.save).to.throw();
    });

    it('cannot save without email', () => {
      const [,, user] = users;
      const newUser = new User({
        ...user,
        email: '',
      });

      expect(newUser.save).to.throw();
    });

    it('cannot save without password', () => {
      const user = users[users.length - 1];
      const newUser = new User({
        ...user,
        password: '',
      });

      expect(newUser.save).to.throw();
    });
  });
});

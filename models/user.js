module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) { // eslint-disable-line
        throw new Error('Do not try to set the `fullName` value!');
      },
    },
  }, {});
  User.associate = function(models) { // eslint-disable-line
    // associations can be defined here
  };
  return User;
};

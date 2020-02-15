class JoiValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'joiValidationError';
  }
}

module.exports = {
  JoiValidationError,
};

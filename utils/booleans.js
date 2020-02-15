const typeCast = (bool) => {
  if (typeof bool !== 'boolean') {
    return Boolean(bool);
  }
  return bool;
};

module.exports = typeCast;

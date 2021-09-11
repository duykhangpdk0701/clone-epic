const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  const hashingPassword = await bcrypt.hash(password, salt);
  return hashingPassword;
};

module.exports = hashPassword;

const {genSalt, hash} = require("bcrypt");

async function hashPassword(password) {
  const salt = await genSalt(10);
  return await hash(password, salt);
}

module.exports = {
  hashPassword,
}
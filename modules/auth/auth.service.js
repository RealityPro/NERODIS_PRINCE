const { users } = require("../../models/user.model");
const { hashPassword, comparePassword } = require("../../utils/password.util");
const { generateToken } = require("../../utils/jwt.util");

const registerUser = async (email, password) => {
  const exists = users.find(u => u.email === email);
  if (exists) throw new Error("User already exists");

  const user = {
    id: Date.now().toString(),
    email,
    password: await hashPassword(password),
  };

  users.push(user);
  return user;
};

const loginUser = async (email, password) => {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error("Invalid credentials");

  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  return generateToken({
    id: user.id,
    email: user.email,
  });
};

module.exports = {
  registerUser,
  loginUser,
};
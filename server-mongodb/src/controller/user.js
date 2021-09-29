const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//import model
const User = require("../model/User");
const authValidation = require("../validate/auth");

exports.userLogin = async (req, res) => {
  const { username, password } = req.body;
  //validating request
  const { error } = authValidation.login(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if username correct
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("Username not exist");
  //checking if password correct
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Password incorrect");
  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  try {
    return res
      .status(200)
      .header("auth-token", token)
      .send({
        user: {
          _id: user._id,
          username: user.username,
        },
        token,
      });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

exports.userRegister = async (req, res) => {
  const { username, password } = req.body;
  // validating request
  const { error } = authValidation.register(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //checking if username exit
  const usernameExist = await User.findOne({ username });
  if (usernameExist) return res.status(400).send("Username already exist");
  //checking if email exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist");
  //compare password vs confirmPassword
  console.log(req.body.password);
  const isMatchPassword = req.body.password === req.body.confirmPassword;
  if (!isMatchPassword)
    return res.status(400).send("Password and Confirm password is not match");
  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //creating a new user
  const user = new User({
    username,
    password: hashedPassword,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  try {
    const savedUser = await user.save();
    res.status(200).send({ userId: savedUser._id });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

exports.userFindById = async (req, res) => {
  try {
    const findUser = await User.findById(req.params.id);
    return res.status(200).send(findUser);
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

exports.userFindByName = async (req, res) => {
  try {
    const findUser = await User.findOne({ name: req.params.name });
    return res.status(200).send(findUser);
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

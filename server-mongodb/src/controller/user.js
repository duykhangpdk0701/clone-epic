const User = require("../model/User");

const userRegister = async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  try {
    const savedUser = await user.save(() => console.log("inserted to db"));
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

const userFindById = async (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send({ message: err });
    });
};

module.exports = {
  userRegister,
  userFindById,
};

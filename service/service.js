const { where } = require("sequelize");
const { user } = require("../models");
const saveUser = (req, res) => {
  user
    .create({
      firstName: "Rajat",
      lastName: "Golakonda",
      age: 25,
      email: "abc@xyz.com",
    })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};

const getAllUser = (req, res) => {
  user
    .findAll()
    .then((users) => {
      if (users.length === 0) {
        res.status(200).send("data not available");
      } else {
        res.status(200).json(users);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUser = (req, res) => {
  user
    .findAll({ where: { firstName: req.body.firstName } })
    .then((users) => {
      if (users.length === 0) {
        res.status(200).send("data Packet is Empty");
      } else {
        res.status(200).json(users);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // res.send("particular user");
};

const updateUser = (req, res) => {
  res.send("upadate User");
};

const deleteUser = (req, res) => {
  user.distory({ where: { id: req.param.id } }).then();
  res.send("delete usre");
};

module.exports = {
  saveUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};

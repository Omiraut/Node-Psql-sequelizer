const express = require("express");
const app = express;
const service = require("../service/service");

const saveUser = async (req, res) => {
  await service.saveUser(req, res);
  //   res.status(200).send("OK");
};
const getAllUser = async (req, res) => {
  await service.getAllUser(req, res);
};
const getUser = async (req, res) => {
  await service.getUser(req, res);
};
const updateUser = async (req, res) => {
  await service.updateUser(req, res);
};
const deleteUser = async (req, res) => {
  await service.deleteUser(req, res);
};

module.exports = {
  saveUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};

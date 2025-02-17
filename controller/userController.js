import User from "../models/User.js";

const createUser = async (req, res) => {
  try {
    const body = req.body;
    const user = await User.create(body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) res.status(404).json("User not found");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) res.status(404).json("User not found");
    await user.update(req.body);
    res.status(200).res(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) res.status(404).json("User not found");
    await user.destroy();
    res.status(200).json({ message: "User was deleted" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default { createUser, getAllUsers, getUser, updateUser, deleteUser };

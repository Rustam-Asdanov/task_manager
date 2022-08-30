const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addTask = async (req, res) => {
  await Task.create(req.body)
    .then((task) => {
      res.status(201).json({ task });
    })
    .catch((err) => {
      res.status(500).json(err.errors.name.message);
    });
};

const getTask = async (req, res) => {
  const { id: taskID } = req.params;

  await Task.findOne({ _id: taskID })
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: `No task with id: ${taskID}` });
      }
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((task) => {
      if (!task) {
        res.status(404).json({ message: `No task with id: ${taskID}` });
      }
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  await Task.findOneAndDelete({ _id: taskID })
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: `No task with id: ${taskID}` });
      }

      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};

module.exports = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};

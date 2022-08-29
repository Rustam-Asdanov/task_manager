const getAllTasks = (req, res) => {
  res.send("All items from file");
};

const addTask = (req, res) => {
  res.send("Add new Task");
};

const getTask = (req, res) => {
  res.send("get task");
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};

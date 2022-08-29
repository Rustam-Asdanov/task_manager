const getAllTasks = (req, res) => {
  res.send("All items from file");
};

const addTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

const updateTask = (req, res) => {
  res.json({
    id: req.params.id,
    task: req.body,
  });
};

const deleteTask = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

module.exports = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};

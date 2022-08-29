const getAllUsers = (req, res) => {
  res.send("Get All Users");
};

const addUser = (req, res) => {
  res.json({
    username: req.body.username,
    password: req.body.password,
  });
};

const getUserById = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

const updateUserData = (req, res) => {
  res.json({
    id: req.params.id,
    user: req.body,
  });
};

const deleteUserById = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
  updateUserData,
  deleteUserById,
};

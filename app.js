const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const users = require("./routes/users");

// middleware

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

app.use("/api/v1/user", users);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

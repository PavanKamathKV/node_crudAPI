const express = require("express");
require('dotenv').config()

const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Testing Node");
});

const taskRoutes = require("./src/routes/task.routes");

app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

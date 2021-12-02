const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Testing Node");
});

const taskRoutes = require("./src/routes/task.routes");

app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

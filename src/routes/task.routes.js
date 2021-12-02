const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.get("/", taskController.findAllTasks);

router.post("/", taskController.createTask);

router.get("/:id", taskController.findTaskById);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;

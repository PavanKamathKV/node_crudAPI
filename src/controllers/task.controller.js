"use strict";

const Task = require("../models/task.model");

exports.findAllTasks = function (req, res) {
  Task.findAllTasks(function (err, task) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", task);
    res.send(task);
  });
};

exports.createTask = function (req, res) {
  const new_task = new Task(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Provide all required fields" });
  } else {
    Task.createTask(new_task, function (err, task) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Task added successfully!",
        data: task,
      });
    });
  }
};

exports.findTaskById = function (req, res) {
  Task.findTaskById(req.params.id, function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.updateTask = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Provide all required fields" });
  } else {
    Task.updateTask(req.params.id, new Task(req.body), function (err, task) {
      if (err) res.send(err);
      res.json({ error: false, message: "Task updated successfully" });
    });
  }
};

exports.deleteTask = function (req, res) {
  Task.deleteTask(req.params.id, function (err, task) {
    if (err) res.send(err);
    res.json({ error: false, message: "Task deleted successfully" });
  });
};
